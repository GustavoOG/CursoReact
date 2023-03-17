//Tarea
//Pruebas en el <CounterApp/>
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

//test:debe de de hacer match con el snapshot
//test: debe de mostrar el valor inicial de 100 <CounterApp value={100}/>

describe("Pruebas en CounterApp", () => {
  const initialValue = 10;

  test("debe de hacer match con el snapshop", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100 <CounterApp value={100}/>", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });

  test("debe de incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test("debe de decrementar con el botón -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test("debe de reiniciar con el boton reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    //screen.debug();
    //fireEvent.click(screen.getByText("Reset"));
    //screen.getByRole('button', {name:"btn-reset"})
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
