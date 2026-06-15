import { SignJWT, decodeJwt } from 'https://cdn.jsdelivr.net/npm/jose@6/+esm';
const message = {dados: "dados da camada de aplicação"}
//camada de sessão: criar sessionId
const payload = {
    sessionId: crypto.randomUUID(),
    message: message
};
const secret = new TextEncoder().encode("chave-teste");
const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);

console.log("Token:", token);

const dados = decodeJwt(token);

console.log("Payload:", dados);

//DNS -domain.Answer[0].data
const url = `ifpe.edu.br`
fetch(`https://dns.google/resolve?name=${url}&type=A`)
.then(res => res.json())
.then(domain => {
  console.log('IP', domain.Answer[0].data)
})

