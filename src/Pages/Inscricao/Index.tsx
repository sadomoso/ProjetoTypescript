import Input from "../../componentes/Input";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

export default function Inscricao() {
  const navigate = useNavigate();
  const [dado, setDado] = useState({
    usuario: "",
    senha: "",
    confSenha: "",
    email: "",
  });
  const { usuario, senha, confSenha, email } = dado;

  // creando a função de enviar os dados atraves do dados
  async function crearPost(cadastro: any) {
    const dados = await axios.post(
      "http://localhost:5000/cadastrados",
      cadastro
    );
  }

  //criando a função para pegar os dados atravez do evento e passar para newDados
  function salvar(event: any) {
    event.preventDefault();

    if (confSenha === senha) {
      const newDados: {
        usuario: string;
        senha: string;
        email: string;
      } = {
        usuario,
        senha,
        email,
      };
      //chamando a função de enviar dados, com os dados (newdados) dentro
      crearPost(newDados);
      alert("Usuario criado");
      navigate("/");
    } else {
      alert("Senhas diferentes!");
    }
  }
  return (
    <Box component={'form'}  onSubmit={salvar}>
      <Box
        bgcolor="black"
        width={"60%"}
        display="flex"
        textAlign="center"
        justifyContent={"center"}
        alignItems="center"
        maxWidth={"100%"}
        margin="20%"
        marginTop={"2%"}
      >
        <Box border='solid'>
          <Typography >Pagina de cadastro</Typography >
          {/*passando os valores do input para o setUsuario, atraves do onchange*/}
          <Input
            type="text"
            name="Usuario"
            text="Usuario"
            value={usuario}
            label="Usuario"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDado((state) => ({ ...state, usuario: e.target.value }))
            }
          />
          <Input
            type="password"
            name="senha"
            text="Senha"
            value={senha}
            label="Senha"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDado((state) => ({ ...state, senha: e.target.value }))
            }
          />
          <Input
            type="password"
            name="confSenha"
            text="Confirme sua senha"
            value={confSenha}
            label="Confirme sua senha"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDado((state) => ({ ...state, confSenha: e.target.value }))
            }
          />
          <Input
            type="email"
            name="email"
            text="Email"
            value={email}
            label="Email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDado((state) => ({ ...state, email: e.target.value }))
            }
          />
          <Button type="submit"> Finalizado</Button>
        </Box>
      </Box>
    </Box>
  );
}
