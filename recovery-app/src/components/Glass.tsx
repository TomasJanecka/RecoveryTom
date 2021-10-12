import styled from "styled-components";

const StyledGlass = styled.div`
  width: 800px;
  height: 640px;
  display: flex;
  justify-content: center;
  background-image: url("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg");
`;

const StyledButton = styled.button<{ theme: { colors: {}; fonts: {} } }>`
  background-color: ${(props) => props.theme.colors.text};
  :hover {
    background-color: ${(props) => props.theme.colors.second};
  }
`;

export const Glass = (props: any) => {
  return (
    <StyledGlass>
      <GlassEffect>
        Volam sa Jano a mam velky kokot!
        <StyledButton>stlacit pre este vacsi kokot</StyledButton>
      </GlassEffect>
      <GlassEffect>
        Volam sa Fero a mam velky kokot!
        <StyledButton>stlacit pre este vacsi kokot</StyledButton>
      </GlassEffect>
    </StyledGlass>
  );
};

const GlassEffect = styled.div`
  align-self: center;
  width: 300px;
  height: 340px;
  color: yellow;
  display: flex;
  margin: 20px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 100px;
  backdrop-filter: blur(1px);
  background-color: rgba(186, 186, 186, 0.544);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 0 rgba(255, 255, 255, 0.4) solid;
  border-bottom: 0 rgba(40, 40, 40, 0.35) solid;
  border-right: 0 rgba(40, 40, 40, 0.35) solid;

  :hover {
    background-color: rgba(220, 86, 386, 0.244);
  }
`;
