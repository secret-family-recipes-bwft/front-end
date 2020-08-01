import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Directions() {
  const defaultState = {
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    step6: "",
    step7: "",
    step8: "",
    step9: "",
    step10: "",
  };
  const [formState, setFormState] = useState(defaultState);
  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    formState(defaultState);
  }

  return ( <h1>Directions</h1>)
}
    // <PageContainer>
    //   <Header>
    //     <Logo>Family Recipe App</Logo>
    //     <ProgressHeader>Step 3: How do you make this recipe? </ProgressHeader>
    //   </Header>
    //   <ProgressBarDiv>
    //     <ProgressSignifier />
    //   </ProgressBarDiv>
    //   <FormContainer>
    //     <FieldsContainer>
    //       <StatusLayoutDiv>
    //         <StatusContainer>
    //           <Heading>What are the directions?</Heading>
    //           <form onSubmit={handleSubmit}>
    //             {/*  */}
    //             <InputDiv>
    //               <TextAreaInput
    //                 name="step1"
    //                 placeholder="Step 1"
    //                 value={formState.step1}
    //                 onChange={handleChange}
    //                 // cols="10"
    //                 // rows="10"
    //               />
    //             </InputDiv>
    //             {/*  */}
    //             <InputDiv>
    //               <TextAreaInput
    //                 name="step2"
    //                 placeholder="Step 2"
    //                 value={formState.step2}
    //                 onChange={handleChange}
    //                 // cols="10"
    //                 // rows="10"
    //               />
    //             </InputDiv>
    //             {/*  */}
    //             <InputDiv>
    //               <TextAreaInput
    //                 name="step3"
    //                 placeholder="Step 3"
    //                 value={formState.step3}
    //                 onChange={handleChange}
    //                 // cols="10"
    //                 // rows="10"
    //               />
    //             </InputDiv>
    //             {/*  */}
    //             <InputDiv>
    //               <TextAreaInput
    //                 name="step4"
    //                 placeholder="Step 4"
    //                 value={formState.step4}
    //                 onChange={handleChange}
    //                 // cols="10"
    //                 // rows="10"
    //               />
    //             </InputDiv>
    //             {/*  */}
    //             <InputDiv>
    //               <TextAreaInputLast
    //                 name="step5"
    //                 placeholder="Step 5"
    //                 value={formState.step5}
    //                 onChange={handleChange}
    //                 // cols="10"
    //                 // rows="10"
    //               />
    //             </InputDiv>
    //             {/*  */}
    //           </form>
    //         </StatusContainer>
    //       </StatusLayoutDiv>
    //       <FormNavigation>
    //         <ButtonDiv>
    //           <Link to="/the-ingredients">
    //             <BackButton>Back</BackButton>
    //           </Link>
    //           <Link to="/recipe-created-success">
    //             <NextButton>Next</NextButton>
    //           </Link>
    //         </ButtonDiv>
    //       </FormNavigation>
    //     </FieldsContainer>
    //     {/* <ContentConatiner></ContentConatiner> */}
    //   </FormContainer>
    // </PageContainer>
 
    // <div>
    //   <h1>What are the directions?</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="step1">
    //       <br />
    //       <textarea
    //         name="step1"
    //         value={formState.step1}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 1"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step2">
    //       <br />
    //       <textarea
    //         name="step2"
    //         value={formState.step2}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 2"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step3">
    //       <br />
    //       <textarea
    //         name="step3"
    //         value={formState.step3}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 3"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step4">
    //       <br />
    //       <textarea
    //         name="step4"
    //         value={formState.step4}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 4"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step5">
    //       <br />
    //       <textarea
    //         name="step5"
    //         value={formState.step5}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 5"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step6">
    //       <br />
    //       <textarea
    //         name="step6"
    //         value={formState.step6}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 6"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step7">
    //       <br />
    //       <textarea
    //         name="step7"
    //         value={formState.step7}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 7"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step8">
    //       <br />
    //       <textarea
    //         name="step8"
    //         value={formState.step8}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 8"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step9">
    //       <br />
    //       <textarea
    //         name="step9"
    //         value={formState.step9}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 9"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step10">
    //       <br />
    //       <textarea
    //         name="step10"
    //         value={formState.step10}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 10"
    //       />
    //     </label>

    //     <br />
    //     <br />
    //     <button>+Add Step</button>
    //     <br />
    //     <br />
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         width: "100vw",
    //         margin: "0 auto",
    //       }}
    //     >
    //       <Link>
    //         <button>Back</button>
    //       </Link>

    //       <br />
    //       <Link to="/recipe-created-success">
    //         <button>Next</button>
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  
