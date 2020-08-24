import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'

const schema = yup.object().shape({
  login: yup.string().max(10, 'Login must be shorter than 10 characters.').required(),
  password: yup.string().min(6, 'Password should be longer than 6 characters.').required(),
})

const App = () => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input
        type="text"
        id="login"
        name="login"
        placeholder="Login"
        ref={register}
      />
      {errors.login && <div>{errors.login.message}</div>
      }
      < input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        ref={register}
      />
      {errors.password && <div>{errors.password.message}</div>}
      < button type="submit" > Submit</button >
    </form >
  );
}

export default App;
