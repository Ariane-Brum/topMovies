type Props = {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <div className="mx-auto  w-full ">
      <button
        aria-label="Botão buscar filme"
        className={`w-full rounded bg-cyan-400 py-[6px] font-source text-lg font-semibold text-blue-500 hover:bg-cyan-600`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
