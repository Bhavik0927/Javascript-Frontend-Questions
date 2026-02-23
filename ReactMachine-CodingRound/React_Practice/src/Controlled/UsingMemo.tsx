import React,{ useState } from "react";

const Input = React.memo(function Input({ name, value, onChange} : any){
    console.log(`${name} re-rendered`)
    return <input name={name} value={value} onChange={onChange}/>
})

const UsingMemo = () => {

  const [form, setForm] = useState({
    name:"",
    email:""
  })

  const handleChange = (e: React.ChangeEvent<HTMLElement>) =>{
    setForm({
      ...form,
      [e.target.name] :  e.target.value,
    })
  }


  return (
    <div>
      <Input name="name" value={form.name} onChange={handleChange} />
      <Input name="email" value={form.email} onChange={handleChange} />
    </div>
  )
}


export default UsingMemo;