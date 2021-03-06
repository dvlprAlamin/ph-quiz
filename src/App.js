import axios from 'axios';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/pages/Home';
import QuizHistories from './views/pages/QuizHistories';
import QuizQuestions from './views/pages/QuizQuestions';

const App = () => {
  const AUTH_TOKEN = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIl9pZCI6IjYxZTdhNWUzZWFjOTU2MGYwMDlkM2VmYiIsInN0YXR1cyI6ImluX3Byb2dyZXNzIiwic3ViIjoiNjFlN2E1ZTNlYWM5NTYwZjAwOWQzZWZiIiwiaWF0IjoxNjQyNTg5MTQ4Ljc4Nn0.kfedYcbxjCQ8feI7Y3SlZOm4Ts4d1i3QtLdR_DLSdD_xcE4tJAwOqI6stQbAK7lPvOftc6e5pIEENMiaCybY5gFEadz9UngIIdL6labG0e8EePyZ48eN4C1ugG4MyJHKIzBH5paLnZNaqrw9vAb_ixRVLx4Rprx-F_e5nU75xR0FCnrpqDI6RiAQ4njeO_jckHrGoT2vkULdlpLH-vhYklSmbZ1MrP8eGPV7h25bzuzPkZg0wk1M0hKArncqZC0-8KVZygXcWJLdDYhusWfS3QxnlwfIUg_Xt0IeoDwdHsN0KxQYvI-HD5ENKlfXZ862Ec_CvdxDwtVhRuFdUC5W5zM7GwfbtqlasEKoUVRUmfUdSG3D7pn2mS-b4eg9vZ8VYgO1X0aoimVUAFJrUW6iKrn8n6VSAHvsKAIWwAkMJTi0FtKJrdmhIpBteqXWJHNHjZAcZvnVnhXXM9Ve3labwMY7qa_s9u8J85EBFSqrkhwiejOj6EAJXpJFltL85omB6aD2XsW9joyslplO4D0_tQEz04-y8U2AaotFzr3Y7NTwoUMdADEjPViw5MXpBWIza17g9D8lHY_VYFkCv7_fQLYeE8DhQTCwLGnjnbqoRJg5-VbFJKZYiX6z2Py_KoEqH0dkZQu74kdome89ZDiFtUBEpswrzyhiLwONBhvuMHs'
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/quiz-question/:slug'} component={QuizQuestions} />
        <Route path={'/quiz/:slug'} component={QuizHistories} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
