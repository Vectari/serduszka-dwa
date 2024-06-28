import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledArticleHeader = styled.h2`
  width: 90%;
  margin: 0.8rem auto;
  padding: 10px 0 10px 0;
  font-family: "Roboto";
  border-top: 1px solid ${theme.colors.articlelines};
  border-bottom: 1px solid ${theme.colors.articlelines};
`;

const StyledQuestion = styled.article`
  width: 90%;
  margin: 5px auto;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "Roboto";
`;

const StyledAnswer = styled.article`
  width: 90%;
  margin: 5px auto 20px;
  font-size: 1.2rem;
  font-family: "Roboto";
`;

const Questions = () => {
  return (
    <>
      <StyledArticleHeader id="questions">
        Często zadawane pytania
      </StyledArticleHeader>
      <StyledQuestion>
        Czy mogę przyjechać do Biura Serduszka Dwa nie umawiając się na wizytę?
      </StyledQuestion>
      <StyledAnswer>
        Każda z osób zainteresowanych przed planowaną wizytą w Biurze proszona
        jest o wcześniejszy kontakt telefoniczny celem umówienia się na
        konkretny dzień i godzinę.
      </StyledAnswer>{" "}
      <StyledQuestion>
        Czy w celu zapisania się konieczna jest osobista wizyta w biurze?
      </StyledQuestion>{" "}
      <StyledAnswer>
        Nie jest wymagana osobista wizyta. Można wszystkie informacie przekazać
        w rozmowie telefonicznej z pracownikiem, a następnie przesłać swoje
        zdjęcia i w ten sposób zostać członkiem Biura.
      </StyledAnswer>
      <StyledQuestion>
        Jak długo będę czekała/czekał na pierwsze przedstawienie przez Biuro
        propozycje poznania kandydata?
      </StyledQuestion>{" "}
      <StyledAnswer>
        Pierwsze propozycje dostanie Pani/Pan w ciągu 2-4 dni.
      </StyledAnswer>{" "}
      <StyledQuestion>
        Czy wszystkie osoby zapisujące się do Biura Serduszka Dwa są stanu
        wolnego?
      </StyledQuestion>{" "}
      <StyledAnswer>
        Wszystkie osoby zapisujące się do Biura są stanu wolnego: panna,
        kawaler, rowiedziona/rozwiedziony, wdowa/wdowiec oraz osoby w trakcie
        rozwodu i będące w długotrwałej separacji. Nie korzystają z pomocy Biura
        osoby będące w związku małżeńskim.
      </StyledAnswer>{" "}
      <StyledQuestion>
        Czy płatność za usługę Biura można wpłacić w formie rat?
      </StyledQuestion>{" "}
      <StyledAnswer>Tak, można uiścić płatność w dóch ratach.</StyledAnswer>{" "}
      <StyledQuestion>
        Jaka jest skuteczność Biura w doborze Kandydatów?
      </StyledQuestion>{" "}
      <StyledAnswer>
        Biuro wywiązuje się z realizacji przedstawiania - przesyłania ofert
        kandydatów bazujac na informacjach jakie podają o sobie każda z osób
        będąca Klientką/Klientem Biura. Na podstawie tych kryterii Biuro
        Serduszka Dwa dokonuje przygotowania ofert, osób zainteresowanych
        wzajemnym poznaniem. Każda ze stron zostaje zapoznana z kandydatem i
        zostaje przesłane do nich zdjęce, czy wyrazaja chęć siebie poznania. Tu
        decydują tylko osoby zainteresowane. Relacje między osobami poznanymi
        przez Biuro Serduszka Dwa należą tylko do nich i decyzje jakie podejmują
        są tylko i wyłącznie ich sprawą. Biuro nie ponosi żadnej
        odpowiedzialnisci za decyzje i poczynania osób dorosłych. To czy osoby
        będą razem, się sobie wzajemnie spodobają i zaakceptują zależy tylko od
        samych zainteresowanych. Biuro nie ma wpływu na gust osob poszukujących,
        na ich charaktery i poglądy. Tu muszą dobrać się dwie osoby pragnące
        poznać drugiego człowieka i gdy zajdzie taka potrzeba, dojść wspólnie do
        porozumienia.
      </StyledAnswer>
      <StyledQuestion>
        Czy istnieje możliwość poznania kogoś w charakterze osoby towarzyszącej
        na różne okazje?
      </StyledQuestion>{" "}
      <StyledAnswer>
        Biuro Serduszka Dwa świadczy także usługi poznania osób na specjalne
        okazje np. wspólne spędzenie Sylwestra. Wspólnego spędzenia wakacji,
        wycieczki. Kolejny przykład to jako osoba towarzysząca na imprezę typu
        ślub, wesele i inne podobne okoliczności gdzie stawka usługi Biura
        Serduszka Dwa jest indywidualnie ustalana z zainteresowanymi Klientami
        za tego typu usługę poznania osób za pośrednictwem Biura.
      </StyledAnswer>
      {/* TODO
    3. kontakt
    4. mail
    5. mapka */}
    </>
  );
};

export default Questions;
