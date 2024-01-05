export async function loginProcedure(data, setCurrentUser) {
  const jsonPayload = {
    email: data.get("email"),
    password: btoa(data.get("password")), //To btoa() function kanei encode se base-64
  };

  const response = await fetch("http://localhost:5021/api/Account/Login", {
    method: "POST",
    body: JSON.stringify(jsonPayload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const responseData = await response.json();
    console.log("Response Data:", responseData);
    setCurrentUser({
      email: responseData.user.email,
      token: responseData.token,
    });

    // const authenticate = await fetch(
    // "http://localhost:5021/",  //EDO MPAINEI URL OPOU O SERVER PAIRNEI PISO TO TOKEN KAI KANEI TO AUTHENTICATION
    // {
    //     method: "POST",
    //     body: "",  //TORA TO BODY DEN XREIAZETAI NA KOUVALAEI PLIROFORIA. O,TI PLIROFORIA XREIAZETAI EINAI STO HEADER
    //     headers:
    //     {
    //     "Content-Type": "application/json",
    //     "Authorization": currentUser.token  //O SERVER VRISKEI TO TOKEN MESO TOU AUTHORIZATION HEADER
    //     }
    // }               //kai meta redirect sto home kapos...
  } else {
    console.error(
      "Failed to submit form data:",
      response.status,
      response.statusText
    );
  }
}
