import { buyCertificate } from "api/certificates/buyCertificate";

export const handleBuy = async (jsonPayload) => {
  //PROBLIEMA to trexei pano apo mia fora logo rerendering kai parolo p leitourgei
  // @ts-ignore
  await buyCertificate(jsonPayload); //sosta stin consola petaei error. ALEXI KANE TA MAGIKA SOU KAI FTIAKSE CAPTAIN HOOK!!!
  navigate("/");
};
