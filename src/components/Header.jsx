import logo from '../assets/investment-calculator-logo.png'

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <img src={logo} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  )
}
