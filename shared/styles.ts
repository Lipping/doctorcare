import styled from '@emotion/styled'

export const Container = styled.main` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    
    
    background-color: #dce9e2;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 72px;
    padding: 0 32px;
    max-width: 1440px;
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    height: 4.5rem;
    `;

export const Logo = styled.img` 
    width: 132.86px;
    height: auto;
`;

export const Navigation = styled.nav` 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`;

export const NavItem = styled.span`
    font-weight: 400;
    font-size: 1rem;
    color: #00856f;
    opacity: 0.7;
    text-decoration: none;
    line-height:1.3125rem;
    :hover {
        text-decoration: underline;
        text-underline-offset: 24px;
        text-decoration-thickness: 2px;
        font-weight:700;
        opacity: 1;
        cursor: pointer;
        font-size: 0.9375rem;
    }
    `;

export const OutlineButton = styled.button`
    width: 11.875rem;
    height: 2.375rem;
    border-radius: 2.5rem;
    border: 1px solid #00856f;
    text-align: center;
    font-weight: 700;
    font-size: 0.875rem;
    color: #00856f;
    background-color: transparent;
    cursor: pointer;
    :hover {
        background-color: #00856f;
        color: #fff;
    }
    `;

export const Content = styled.section`
    display: flex;
    width: 100vw;
    max-width: 1440px;
    justify-content: space-between;
    padding:0 32px;
`;

export const Presentation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    `;

export const PresentationText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 5rem;
    `;

export const Subtitle = styled.h3`
    font-weight: 700;
    color: #00856f;
    font-size: 0.875rem;
    line-height: 1,3125rem;
    letter-spacing: 0.08em;
`;

export const PresentationTitle = styled.h1`
    font-size: 3.25rem;
    font-weight: 700;
    color: #212529;
    line-height: 4.225rem;
    margin-top: 1rem;
    `;

export const Paragraph = styled.p`
    font-size: 1.125rem;
    font-weight: 400;
    color: #495057;
    line-height: 1.6875rem;
    margin-top: 1.5rem;
`;

export const IconButton = styled.button`
    display:flex;
    align-items: center;
    justify-content: center;

    width: 16.4375rem;
    height: 3.25rem;
    
    border-radius: 2.5rem;
    border: none;

    text-align: center;
    font-weight: 700;
    font-size: 0.875rem;
    color: #fff;
    
    background-color: #00856f;
    cursor: pointer;
    margin-top: 2rem;
    gap: 1rem;

    :hover {
        background-color: #00453a;
        color: #fff;
    }
    `;

export const IconWhatsapp = styled.img`
    width: 1.25rem;
    
`;

export const Image = styled.img`
    width: 420px;
    height: 547px;
    margin-right: 2.75rem;
`;

export const StatisticBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    padding: 0 32px;
    position: absolute;
    top:571px;
    `;

export const StatisticTable = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width:100%;
    height: 13.125rem;
    padding: 0 120px;
    
    background-color: #fffaf1;
    
    border: 1px solid #dce9e2;
    
    border-radius: 0.375rem;
    
`;

export const PatientsAttendedBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
`;

 export const PatientsAttendedNumber = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: #212529;
    line-height: 3.9rem;
 `;

export const PatientsAttendedText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #00856f;
    line-height: 1.5rem;
`;

export const Line = styled.div`
    width: 0.0625rem;
    height: 5.1875rem;
    background-color: #00856f;
    opacity: 0.5;
`;

export const AvailableExpertsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
`;

export const AvailableExpertsNumber = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: #212529;
    line-height: 3.9rem;
    `;

export const AvailableExpertsText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #00856f;
    line-height: 1.5rem;
`;

export const MarketYearsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
`;

export const MarketYearsNumber = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: #212529;
    line-height: 3.9rem;
`;

export const MarketYearsText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #00856f;
    line-height: 1.5rem;
`;

export const ServicesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height:1082px;
    background-color: #f7f9f9;
    padding: 0 32px;
    margin-top: 55px;
`;

export const ServicesBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin-top: 160px;
`;

export const ServicesTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
`;

export const ServicesSubtitle = styled.h3`
    font-weight: 700;
    color: #00856f;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    letter-spacing: 0.08em;
`;

export const ServicesTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #212529;
    line-height: 3.255rem;
`;

export const ServicesCardsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
`;

export const ServicesCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 21.6875rem;
    height: 12.9375rem;
    border: 1px solid #dce9e2;
    border-radius: 0.375rem;
    padding: 24px;
    gap: 1rem;
    background-color: #fff;
`;

export const IconCheckMark = styled.img`
    width: 1.25rem;
    
`;

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #212529;
    line-height: 1.3281rem;
    `;

export const CardText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #495057;
    line-height: 1.5rem;
    `;