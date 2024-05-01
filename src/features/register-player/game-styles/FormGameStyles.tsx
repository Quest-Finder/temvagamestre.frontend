import { FormTitle } from "../utils/title-form";
import { FormAditionalText } from "./components/FormAditionalText";

export function FormGameStyles() {
  return (
    <>
      <FormAditionalText>
        Olá! Para aprimorarmos sua experiência no TVM, por favor, responda algumas perguntas.
      </FormAditionalText>
      <FormTitle>
        Escolha o estilo de jogo que mais se alinha com seus interesses.
      </FormTitle>
    </>
  )
}