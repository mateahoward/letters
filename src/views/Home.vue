<template>
  <section class="home">

     <header>
        <h1> Valentine's Day Letters</h1>
     </header>

      <section> 
        <div class="title">
          <h2> Please select a language </h2>
        </div>

        <div class="languages">

          <i @click="setCountry('UK')" :class="{'isActive' : isUK}" >
            <country-flag country='gb' size='big' />
          </i>

          <i @click="setCountry('HR')" :class="{'isActive' : isHR}" >
            <country-flag country='hr' size='big'  />
          </i>

        </div>

        <div class="instructions" v-if="shouldShowInstructions">
            <h3> {{ chosenLanguage.instructionsTitle }} </h3>

            <ul>
                <li> 1. {{ chosenLanguage.instruction1 }} </li>
                <li> 2. {{ chosenLanguage.instruction2 }} </li>
                <li> 3. {{ chosenLanguage.instruction3 }} </li>
                <li> 4. {{ chosenLanguage.instruction4 }} </li>
            </ul>

            <button class="instructions-button" @click="shouldShowInstructions = !shouldShowInstructions"> {{ chosenLanguage.closeInstructionsText }} </button>
        </div>
      </section>

      <section class="form-inputs" v-if="hasSetCountry">
        <Form :language="chosenLanguage"></Form>
      </section>
      
  </section>
</template>

<script>
// @ is an alias to /src
import  translations  from '@/assets/translations.json'
import Form from '../components/Form.vue';


export default {
    name: "Home",
    components: {
      Form
    },
    data() {
        return {
            isUK: false,
            isHR: false,
            hasSetCountry: false,
            translations,
            shouldShowInstructions: true
        };
    },
    methods: {
        setCountry(country) {
            if (country === "UK") {
                this.isUK = true;
                this.isHR = false;
                this.hasSetCountry = true;
                this.shouldShowInstructions = false
            }
            else {
                this.isHR = true;
                this.isUK = false;
                this.hasSetCountry = true;
                this.shouldShowInstructions = false
            }
        }
    },
    computed: {
        english() {
            return this.translations.languages.english;
        },
        croatian() {
            return this.translations.languages.croatian;
        },
        chosenLanguage() {
          if(this.isUK) {
            return this.english;

          } else if(this.isHR) {
            return this.croatian;
          } else {
            return this.english
          }
        }
    },
}

</script>

<style lang="scss" scoped>
header {
  h1 {
    font-size: 45px;
    background: #E91E63;
    background: -webkit-linear-gradient(to right, #E91E63 0%, #5B67CF 69%);
    background: -moz-linear-gradient(to right, #E91E63 0%, #5B67CF 69%);
    background: linear-gradient(to right, #E91E63 0%, #5B67CF 69%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.title {
  h2 {
    font-size: 20px;
    
  }
}
  .languages {

    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    i {
      display: flex;
      justify-content: center;
      margin: 10px;
      padding: 10px;

       &.isActive  {
        border: 5px solid #e91e63;
        background: #f7f2f2;
      }
    }
  }

  .form-inputs {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-top: 60px;
      max-width: 900px;
      width: 90%;
      margin: 0 auto;
  }

  .instructions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    width: 90%;
    height: 400px;
    border: 2px solid #2c3e50;

    margin: 0 auto;

    h3 {
      font-size: 25px;
      text-decoration: underline wavy #2c3e50;
      color: #e91e63;
      font-weight: bold;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    li {
      text-align: left;
      width: 100%;
      margin-bottom: 10px;
      color: #2c3e50;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .instructions-button {
    padding: 10px 15px;
    background:#e91e63;
    border: 0;
    color: white;
    border-radius: 8px;

    margin-top: 30px;
  }
</style>
