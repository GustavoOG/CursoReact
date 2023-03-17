import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  const title = "Hola, soy Goku";
  const subTitle = "Soy un subtitulo";
  test("debe de hacer match con el snapshopt", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de ostrar el mensjae "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    //screen.debug();
  });

  test("debe de mostrar el titulo en h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('debe de notrar el subtitulo enviado por props', () => { 
    render(<FirstApp title={title}  subTitle={subTitle}/>);
    expect(screen.getAllByText(subTitle).length).toBe(2);
   })
});
