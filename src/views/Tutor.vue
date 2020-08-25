<template>
    <main>
        <hr />
      <div >
        <select defaultValue='Search by University / State' onChange={handleChange} name="University" required="" >
          <option disabled>Search by University / State</option>
          <option value="University">University</option>
          <option value="State">State</option>
        </select>
        <select defaultValue='' id="University" >
          <option value="" disabled >Choose your State</option>
          <option value="Abia State">Abia State</option>
          <option value="Adamawa State">Adamawa State</option>
          <option value="Anambra State">Anambra State</option>
          <option value="Bauchi State">Bauchi State</option>
          <option value="Bayelsa State">Bayelsa State</option>
          <option value="Benue State">Benue State</option>
          <option value="Borno State">Borno State</option>
          <option value="Cross River State">Cross River State</option>
          <option value="Delta State">Delta State</option>
          <option value="Ebonyi State">Ebonyi State</option>
          <option value="Edo State">Edo State</option>
          <option value="Ekiti State">Ekiti State</option>
          <option value="Enugu State">Enugu State</option>
          <option value="FCT State">FCT State</option>
          <option value="Gombe State">Gombe State</option>
          <option value="Imo State">Imo State</option>
          <option value="Jigawa State">Jigawa State</option>
          <option value="Kaduna State">Kaduna State</option>
          <option value="Kano State">Kano State</option>
          <option value="Katsina State">Katsina State</option>
          <option value="Kebbi State">Kebbi State</option>
          <option value="Kogi State">Kogi State</option>
          <option value="Kwara State">Kwara State</option>
          <option value="Lagos State">Lagos State</option>
          <option value="Nassarawa State">Nassarawa State</option>
          <option value="Niger State">Niger State</option>
          <option value="Ogun State">Ogun State</option>
          <option value="Ondo State">Ondo State</option>
          <option value="Osun State">Osun State</option>
          <option value="Oyo State">Oyo State</option>
          <option value="Plateau State">Plateau State</option>
          <option value="Rivers State">Rivers State</option>
          <option value="Sokoto State">Sokoto State</option>
          <option value="Taraba State">Taraba State</option>
          <option value="Yobe State">Yobe State</option>
          <option value="Zamfara State">Zamfara State</option>
        </select>
        <select defaultValue='' id="University" >
          <option value="" disabled >Choose your University</option>
          <option value="University of Lagos">University of Lagos</option>
          <option value="University of Ibadan">University of Ibadan</option>
          <option value="University of Nigeria">University of Nigeria</option>
          <option value="Obafemi Awolowo University">Obafemi Awolowo University</option>
          <option value="Covenant University">Covenant University</option>
          <option value="University of Benin">University of Benin</option>
          <option value="University of Ilorin">University of Ilorin</option>
          <option value="Ahmadu Bello University">Ahmadu Bello University</option>
          <option value="University of Abuja">University of Abuja</option>
          <option value="Federal University of Technology, Akure">Federal University of Technology, Akure</option>
          <option value="Federal University of Technology, Minna">Federal University of Technology, Minna</option>
          <option value="Federal University of Agriculture, Abeokuta">Federal University of Agriculture, Abeokuta</option>
          <option value="Afe Babalola University">Afe Babalola University</option>
          <option value="Ladoke Akintola University of Technology">Ladoke Akintola University of Technology</option>
          <option value="Federal University of Technology, Owerri">Federal University of Technology, Owerri</option>
          <option value="Landmark University">Landmark University</option>
          <option value="Lagos State University">Lagos State University</option>
          <option value="Bowen University">Bowen University</option>
          <option value="Redeemer's University">Redeemer's University</option>
        </select>
        <select defaultValue='' id="Faculty" >
          <option value="" disabled >Choose your Faculty</option>
          <option value="Arts">Arts</option>
          <option value="Education">Education</option>
          <option value="Engineering">Engineering</option>
          <option value="Environmental science">Environmental science</option>
          <option value="Law">Law</option>
          <option value="Pharmacy">Pharmacy</option>
          <option value="Science">Science</option>
          <option value="Social Science">Social Science</option>
        </select>
        <div >
          <p >Ensure to select all fields before searching</p>
          <button >Search</button>
        </div>      
        </div>

        <hr style='height:0px'/>
        <div id='showTutor'>
        <div class='cardTutor'>
          <span>Name: Jon Snow</span>
          <span>Rating: 3.5,</span>
          <span>Why: I teach all things Geg, sha just hire me and leave me alone</span>       
        </div>
        <div class='cardTutor'>
          <span>Name: Jon Snow</span>
          <span>Rating: 3.5,</span>
          <span>Why: I teach all things Geg, sha just hire me and leave me alone</span>       
        </div>
        <div class='cardTutor'>
          <span>Name: Jon Snow</span>
          <span>Rating: 3.5,</span>
          <span>Why: I teach all things Geg, sha just hire me and leave me alone</span>       
        </div>
        <div class='cardTutor'>
          <span>Name: Jon Snow</span>
          <span>Rating: 3.5,</span>
          <span>Why: I teach all things Geg, sha just hire me and leave me alone</span>       
        </div>
        <div class='cardTutor'>
          <span>Name: Jon Snow</span>
          <span>Rating: 3.5,</span>
          <span>Why: I teach all things Geg, sha just hire me and leave me alone</span>       
        </div>
        </div>

    
    </main>
</template>

<script>
  export default {};
</script>

<style scoped>
button:hover {
  margin: 5px 0px !important;
  padding: 0.8rem;
  background-color: var(--primary-color);
  outline: none;
  border-radius: 5px;
  border: transparent;
  width: fit-content;
  color: white !important;
}

button {
  margin: 5px 0px !important;
  padding: 0.8rem;
  color: var(--primary-color) !important;
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  border: 1px solid var(--background-color);
  width: fit-content;
}
select {
  background-color: rgba(255, 255, 255, 0.9);
  width: 60vw;
  padding: 7px;
  border: none;
  border-bottom: 1px solid var(--background-color);
  outline: none;
}
.cardTutor {
  display: flex;
  flex-direction: column;
  margin: 5px 0px !important;
  background-color: var(--background-color);
  max-width: 90%;
  /* height: 50%; */
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 3px black;
  color: black;
  transition: 1s;
  text-align: start;
}
#showTutor {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0rem;
}
ul{
  text-align: start !important;
}
  * {
    margin: 0 !important;
    transition: 1s linear;
  }
  .main{
    overflow-y: auto;
  }

  main {
    background-color: white;
    height: 100vh;
    width: 87vw;
    display: flex;
    flex-direction: column;
    text-align: center;
     letter-spacing: 1px;
  word-spacing: 0.4rem;
  }

  main p {
    padding: 5px;
  }
  main  h2 {
    color: var(--primary-color);
    font-size: 2.1rem;
    font-weight: 600 !important;
    margin: 1rem 0rem !important;
  }


  @media screen and (max-width: 813px) {
    body {
      overflow: auto;
    }
    main {
    width: 100vw;
    overflow-y: auto;
  }
    .main {
    width: 100vw;
    margin-bottom: 4rem !important; 
    overflow-y: auto;
  }
  }

  @media screen and (max-width: 613px) {
    main{
      overflow-y: auto;    
    }
    .main{
      margin-bottom: 4rem !important;  
      overflow-y: auto;    
    }
  }
</style>
