import React from "react";
import Input from "../../componentes/Input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Box, Typography } from "@mui/material";

//iniciar a pagina chmando a função puxardados
interface IUser {
  usuario: string;
  senha: string;
  email: string;
}

export default function Edicao() {
  useEffect(() => {
    puxardados();
  }, []);

  const [dado, setDado] = useState<IUser>({
    usuario: "",
    senha: "",
    email: "",
  });
  const navigate = useNavigate();

  //pegar o id da url atual
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);

  // puxar dados atraves do axios e passar para a constante dado
  async function puxardados() {
    const data = await axios.get(`http://localhost:5000/cadastrados/${id}`);

    setDado(data.data);
  }

  //passa os valores do input para dentro
  let { usuario, senha, email } = dado;

  async function atualizar(e: any) {
    e.preventDefault();

    const updateUsuario = {
      //atelara os valores abaixo pelo que esta sendo inserido no input
      usuario: e.target.Usuario.value,
      senha: e.target.senha.value,
      email: e.target.email.value,
    };
    //atualiza as informações da api atravez do id coletado da url
    await axios.put(`http://localhost:5000/cadastrados/${id}`, updateUsuario);
    alert("Atualizado com sucesso");
    navigate("/");
  }

  return (
    <Box margin={"2%"} bgcolor="black" maxHeight={"100vh"}>
      {/*Chamar a função atualizar quando enviar o submit */}
      <Box component={"form"} onSubmit={atualizar}>
        <Box
          justifyContent="center"
          alignItems="center"
          textAlign={"center"}
          marginX="20%"
          marginY={"2%"}
        >
          <Box border="solid" textAlign={"center"} alignItems="center">
            <Typography>Edição de usuario</Typography>

            {/*passando os valores do input para o setDado, atraves do onchange*/}
            <Input
              type="text"
              name="Usuario"
              text="Novo usuario"
              value={usuario}
              label="usuario"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDado({ ...dado, usuario: e.target.value })
              }
            />
            <Input
              type="password"
              name="senha"
              text="Nova senha"
              label="Nova senha"
              value={senha}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDado({ ...dado, senha: e.target.value })
              }
            />

            <Input
              type="email"
              name="email"
              text="Novo email"
              label="Novo email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDado({ ...dado, email: e.target.value })
              }
            />
            <Button type="submit"> Finalizado</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
