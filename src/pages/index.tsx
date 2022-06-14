import { Container, Header, Logo, OutlineButton, Content, Subtitle, PresentationTitle, Paragraph, IconButton, IconWhatsapp, StatisticTable, PatientsAttendedBox, PatientsAttendedNumber, PatientsAttendedText, AvailableExpertsBox, AvailableExpertsNumber, AvailableExpertsText, Line, MarketYearsBox, MarketYearsNumber, MarketYearsText, Image, HeaderContent, Navigation, NavItem, PresentationText, Presentation, ServicesSection, ServicesBox, ServicesTitleBox, ServicesSubtitle, ServicesTitle, ServicesCardsBox, ServicesCard, IconCheckMark, CardTitle, CardText, StatisticBox } from "../../shared/styles";

export default function Home() {
  return (
    <Container>
        <Header>
          <HeaderContent>
          <Logo src="assets/Logo.svg" alt="Logo" />
          <Navigation>
            <NavItem>Início</NavItem>
            <NavItem>Sobre</NavItem>
            <NavItem>Serviços</NavItem>
            <NavItem>Depoimentos</NavItem>
          </Navigation>
          <OutlineButton>AGENDAR CONSULTA</OutlineButton>
          </HeaderContent>
        </Header>
        <Content>
          <Presentation>
          <PresentationText>
            <Subtitle>BOAS VINDAS A DOCTORCARE 👋</Subtitle>
            <PresentationTitle>Assistência médica<br />simplificada para todos</PresentationTitle>
            <Paragraph>Os médicos da DoctorCare vão além dos sintomas para tratar a causa<br />raiz de sua doença e proporcionar uma cura a longo prazo.</Paragraph>
            <IconButton>
              <IconWhatsapp src="assets/iconWhatsapp.svg" alt="Whatsapp icon" />
              AGENDE SUA CONSULTA
              </IconButton>
          </PresentationText>
          <Image src="assets/girl.jpg" alt="" />
          </Presentation>
            
        </Content>
        <StatisticBox>
        <StatisticTable>
          <PatientsAttendedBox>
            <PatientsAttendedNumber>+3500</PatientsAttendedNumber>
            <PatientsAttendedText>Pacientes atendidos</PatientsAttendedText>
          </PatientsAttendedBox>
          <Line />
          <AvailableExpertsBox>
            <AvailableExpertsNumber>+15</AvailableExpertsNumber>
            <AvailableExpertsText>Especialistas disponíveis</AvailableExpertsText>
          </AvailableExpertsBox>
          <Line />
          <MarketYearsBox>
            <MarketYearsNumber>+10</MarketYearsNumber>
            <MarketYearsText>Anos de mercado</MarketYearsText>
          </MarketYearsBox>
        </StatisticTable>
        </StatisticBox>
        <ServicesSection>
        <ServicesBox>
          <ServicesTitleBox>
            <ServicesSubtitle>SERVIÇOS</ServicesSubtitle>
            <ServicesTitle>Como podemos ajudá-lo<br></br> a se sentir melhor?</ServicesTitle>
          </ServicesTitleBox>
          <ServicesCardsBox>
            <ServicesCard>
              <IconCheckMark src="assets/iconCheckMark.svg" alt="Checkmark icon" />
              <CardTitle>Problemas digestivos</CardTitle>
              <CardText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</CardText>
            </ServicesCard>
            <ServicesCard>
              <IconCheckMark src="assets/iconCheckMark.svg" alt="Checkmark icon" />
              <CardTitle>Saúde Hormonal</CardTitle>
              <CardText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</CardText>
            </ServicesCard>
            <ServicesCard>
              <IconCheckMark src="assets/iconCheckMark.svg" alt="Checkmark icon" />
              <CardTitle>Bem-estar mental</CardTitle>
              <CardText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</CardText>
            </ServicesCard>
            <ServicesCard>
              <IconCheckMark src="assets/iconCheckMark.svg" alt="Checkmark icon" />
              <CardTitle>Cuidados Pediátricos</CardTitle>
              <CardText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</CardText>
            </ServicesCard>
            <ServicesCard>
              <IconCheckMark src="assets/iconCheckMark.svg" alt="Checkmark icon" />
              <CardTitle>Autoimune e Inflamação</CardTitle>
              <CardText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</CardText>
            </ServicesCard>
            <ServicesCard>
              <IconCheckMark src="assets/iconCheckMark.svg" alt="Checkmark icon" />
              <CardTitle>Saúde do Coração</CardTitle>
              <CardText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</CardText>
            </ServicesCard>
          </ServicesCardsBox>
        </ServicesBox>
        </ServicesSection>
    </Container>
  )
}