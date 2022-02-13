<template>

    <form> 
       <fieldset>
            <label for="name"> {{ language.LabelPerson }} </label>
            <input type="text" id="name" autocomplete="name" :placeholder=" language.PersonInputPlaceholderText " v-model="personName" required aria-required="true">
       </fieldset>

       <fieldset>
           <label for="message"> {{ language.LabelMessage }} </label>
            <textarea rows="14" cols="50" id="message" autocomplete="off" :placeholder=" language.MessageInputPlaceholderText" v-model="message" required aria-required="true"></textarea>
       </fieldset>

       <fieldset>
         <button @click="createObjectToSend"> {{ language.FormButtonText }}</button>
       </fieldset>
    </form>

</template>

<script>

export default {
    name: 'Form',
    props: ['language'],
    data() {
        return {
            personName: '',
            message: '',
            sendObject: {
                receiver: '',
                message:''
            },
            b64: '',
            jString: '',
        }
    },

    watch : {
        personName: function(val) {
            this.sendObject.receiver = val;
        },

        message: function(val) {
            this.sendObject.message = val;
        },
    },

    methods: {
        createObjectToSend() {
            if(this.sendObject.receiver !== '' && this.sendObject.message !== '') {

                this.jString = JSON.stringify(this.sendObject);
                this.b64 = Buffer.from(this.jString, 'utf8').toString('base64');

                this.$router.push({
                    name: 'Letter',
                    params: {
                        letterDetails: this.b64
                    }
                })

            }
        }
    }
}
</script>



<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 60%;
        min-height: 500px;

        fieldset {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            border: none;
            margin-bottom: 20px;

            label {
                margin-bottom: 5px;
                font-size: 22px;
                font-weight: bold;
            }

            input {
                height: 45px;
            }

            input, textarea {
                width: 100%;
                text-indent: 10px;
                border-radius: 10px;
                border: 2px solid grey;
                background: white;

                &:active, &:focus {
                    border: 2px dashed #e91e63;
                    outline: none;
                }
            }

            a, a:visited, a:hover {
                text-decoration: none;
            }

            button {
               padding: 15px 25px;
                background: #e91e63;
                border: none;
                border-radius: 10px;
                color: white;

                display: flex;
                align-items: center;

                font-weight: bold;
                font-size: 18px;
                margin: 0 auto;

                &:hover {
                    background: lighten(#e91e63, 10%);
                }
            }
        }
    }

    @media (max-width: 900px) {
        .form-inputs form {
            width: 90%;

            label {
                font-size: 18px;
                text-align: left;
                margin-bottom: 10px;
            }

            fieldset {
                margin-bottom: 40px;
            }
        }
    }
</style>
