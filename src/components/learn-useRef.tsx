import { ChangeEvent, useRef, useState } from "react"

export function LearnUseRef() {
  const [name, setName] = useState('')

  const initialValue = useRef<HTMLInputElement>(null)

  function isMyName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function focusInput() {
    initialValue.current?.focus()
  }

  return (
    <div className="learn-useRef">
      <h2>useRef</h2>
      <input
        type="text"
        ref={initialValue}
        value={name}
        onChange={isMyName}
      />
      <p>Hello! My name is <span>{name}</span></p>
      <button onClick={focusInput}>Focus</button>
    </div>
  )
}

// O useRef é um Hook que nos permite acessar o DOM
// de um elemento diretamente dentro do React. O useRef
// retorna um objeto ref mutável cuja propriedade .current
// é inicializada com o argumento passado (initialValue).
// O objeto retornado persistirá durante todo o ciclo de
// vida do componente. useRef não notifica quando seu
// conteúdo muda. Mutar a propriedade .current não causa
//  nova renderização. Se você quiser executar alguma ação,
// como focar um elemento de entrada, você pode usar o callback ref.