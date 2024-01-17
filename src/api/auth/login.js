export const login = async (data) => {
  const jsonPayload = {
    email: data.get("email"),
    password: data.get("password"),
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
    return responseData;
  } else {
    console.error(
      "Failed to submit form data:",
      response.status,
      response.statusText
    );
  }
};
