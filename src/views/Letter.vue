<template>
    <section class="wrapper">
        <section class="envelope">
            <div class="flip-box">
                <div class="flip-box-inner" id="innerBox">

                    <div class="flip-box-front">
                        <section class="button-trigger-wrapper">
                            <div class="button-trigger" id="button">
                                <button @click="addClassNameToTriangle()"> open </button>
                            </div>
                        </section>
                        <div class="person-details-wrapper">
                            <div class="person-details">
                                <h3> Addressed to: </h3>
                                <p> {{ receiver }} </p>
                            </div>
                        </div>
                    </div>

                    <div class="flip-box-back">
                        <div class="triangle-down" id="triangle"></div>
                            <div class="paper-invisible" id="paper">
                                <p v-show="shouldShowLetterDetails" > 
                                    {{message }}
                                </p>
                            </div>
                    </div>

                </div>
            </div>
        </section>

    </section>
</template>


<script>
export default {
    name: 'Letter',

    props: ['letterDetails'],

    data() {
        return {
            message: '',
            receiver: '',
            shouldShowLetterDetails: false,
        }
    },

    created() {
        this.getMessage();
    },
    methods: {
       addClassNameToTriangle() {

            var triangle = document.getElementById("triangle");
            var paper = document.getElementById("paper");
            var button = document.getElementById("button");
            var innerBox = document.getElementById("innerBox");

            innerBox.classList.add('rotate-letter')
            triangle.classList.add('animatedTriangleDown');

            setTimeout(() => {
                triangle.classList.remove('animatedTriangleDown');
                triangle.classList.remove('triangle-down');
  
            }, 3800);


            setTimeout(() => {
                button.classList.add('invisible');
                paper.classList.remove('paper-invisible');
                paper.classList.add('animatedPaper');

            }, 2000);

            setTimeout(() => {
                paper.classList.remove('animatedPaper');
                paper.classList.add('stillPaper');
                this.shouldShowLetterDetails = true;

            }, 4000);
        },
        getMessage(){
            if (this.letterDetails) {
                const json = Buffer.from(this.letterDetails, 'base64').toString('utf8');
                const messageObj = JSON.parse(json);

                this.message = messageObj.message;
                this.receiver = messageObj.receiver;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.wrapper {
    background: #f8c7ca!important;
}

.envelope {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 200px;
}
.button-trigger-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
}

.button-trigger {
    width: 100%;
    margin-right: -40px;
    margin-bottom: 60px;
    z-index: 2;
    height: 100%;

    display: flex;
    justify-content: flex-end;
}

.button-trigger button {
    border: 2px dashed grey;
    outline: none;
    height: 120px;
    width: 120px;
    border-radius: 100%;

    font-size: 20px;
    font-weight: bold;
}

.button-trigger.invisible  {
    display: none;
}


.flip-box {
    background-color: transparent;
    max-width: 800px;
    width: 90%;
    height: 500px;
    border-radius: 20px;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }
  
  /* This container is needed to position the front and back side */
  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 2s;
    transform-style: preserve-3d;
  }
  
    .rotate-letter {
    transform: rotateY(180deg);
  }
  
  /* Position the front and back side */
  .flip-box-front, .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    border: 1px solid #e9989f;
    -webkit-box-shadow: 5px 5px 15px 5px #6a6a6a; 
    box-shadow: 5px 5px 15px 5px #6a6a6a;
  }
  
  /* Style the front side (fallback if image is missing) */
  .flip-box-front {
    background-color: #e9989f;
    color: black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  
  /* Style the back side */
  .flip-box-back {
    background-color: #e9989f;
    color: #9d5a60;
    transform: rotateY(180deg);
    border-radius: 20px;

    p {
        padding: 20px;
        white-space: pre-line;
        overflow: hidden;
        width: 100%
    }
  }


  .triangle-down {
    width: 0; 
    height: 0; 

    border-left: 400px solid transparent;
    border-right: 400px solid transparent;
    border-top: 305px solid #bd5e68;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    position: relative;
    top: 0;

  }

  .triangle-up {
    width: 0; 
    height: 0; 

    border-left: 400px solid transparent;
    border-right: 400px solid transparent;
    border-bottom: 305px solid #bd5e68;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

  }

    .person-details-wrapper {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
  .person-details {
    background-color: #f1f1f1;
    height: 100px;
    width: 200px;

    color: #9e5058;
    display: flex;
    flex-direction: column;

    margin-right: 40px;
    margin-bottom: 60px;

    border-radius: 20px;
    border: 2px dashed #9e5058;
  }


.person-details h3 {
    margin-bottom: 0;
    font-weight: bold;
}

.person-details p {
    margin-bottom: 0;
}

.animatedTriangleDown {
    animation-name: animatedTriangleDown;
    animation-duration: 4s;
    animation-iteration-count: 1;
}

@keyframes animatedTriangleDown {

    from {
        // border-left: 400px solid transparent;
        // border-right: 400px solid transparent;
        // border-top: 305px solid #bd5e68;
    }

    to {
        border-top: 0px solid #bd5e68;
        border-left: 400px solid transparent;
        border-right: 400px solid transparent;
        opacity: 0;
    }

  
}


.animatedPaper {
    display: flex;
    height: 100px;
    width: 80%;
    margin: 0 auto;
    background-color: #fdf3f4;

    position: relative;
    top: 200px;

    animation-name: animatedPapers;
    animation-duration: 4s;
    animation-iteration-count: 1;

    border-radius: 20px;

}

.stillPaper {
    display: flex;
    width: 90%;
    margin: 0 auto;
    background-color: #fdf3f4;
    height: 100%;
    position: relative;
    top: -100px;

    border-radius: 20px;
    -webkit-box-shadow: -2px 2px 20px 0px #6a6a6a; 
    box-shadow: -2px 2px 20px 0px #6a6a6a;
}

@keyframes animatedPapers {
    from {
        height: 100px;
        position: relative;
        top: 200px;
    }

    to {
        height: 100%;
        position: relative;
        top: -100px;
    }
}



@media (max-width: 900px) {
    .button-trigger {
        margin-right: -20px;
    }
    
  .triangle-down {
    width: 0; 
    height: 0; 

    border-left: 397px solid transparent;
    border-right: 380px solid transparent;
    border-top: 205px solid #bd5e68;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    position: relative;
    top: 0;

  }
    
    @keyframes animatedTriangleDown {

        from {
            // border-left: 200px solid transparent;
            // border-right: 200px solid transparent;
            // border-top: 305px solid #bd5e68;
        }

        to {
            border-top: 0px solid #bd5e68;
            border-left: 200px solid transparent;
            border-right: 200px solid transparent;
            opacity: 0;
        }

    
    }
}

@media (max-width: 880px) {
       .triangle-down {
            width: 0;
            height: 0;
            border-left: 380px solid transparent;
            border-right: 380px solid transparent;
            border-top: 200px solid #bd5e68;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            position: relative;
            top: 0;
            margin: 0 auto;
       }

        @keyframes animatedTriangleDown {

            from {
                // border-left: 200px solid transparent;
                // border-right: 200px solid transparent;
                // border-top: 305px solid #bd5e68;
            }

            to {
                border-top: 0px solid #bd5e68;
                border-left: 200px solid transparent;
                border-right: 200px solid transparent;
                opacity: 0;
            }

    
        }
}


@media (max-width: 860px) {
       .triangle-down {
            width: 0;
            height: 0;
            border-left: 300px solid transparent;
            border-right: 300px solid transparent;
            border-top: 200px solid #bd5e68;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            position: relative;
            top: 0;
            margin: 0 auto;
       }

        @keyframes animatedTriangleDown {

            from {
                // border-left: 200px solid transparent;
                // border-right: 200px solid transparent;
                // border-top: 305px solid #bd5e68;
            }

            to {
                border-top: 0px solid #bd5e68;
                border-left: 200px solid transparent;
                border-right: 200px solid transparent;
                opacity: 0;
            }

    
        }
}

@media (max-width: 680px) {
        .triangle-down {
            width: 0;
            height: 0;
            border-left: 230px solid transparent;
            border-right: 230px solid transparent;
            border-top: 200px solid #bd5e68;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            position: relative;
            top: 0;
            margin: 0 auto;
        }
}


@media (max-width: 522px) {
        .triangle-down {
            width: 0;
            height: 0;
            border-left: 200px solid transparent;
            border-right: 200px solid transparent;
            border-top: 200px solid #bd5e68;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            position: relative;
            top: 0;
            margin: 0 auto;
        }
}

@media (max-width: 460px) {
        .triangle-down {
            width: 0;
            height: 0;
            border-left: 180px solid transparent;
            border-right: 180px solid transparent;
            border-top: 200px solid #bd5e68;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            position: relative;
            top: 0;
            margin: 0 auto;
        }
}

@media (max-width: 460px) {
        .triangle-down {
            width: 0;
            height: 0;
            border-left: 150px solid transparent;
            border-right: 150px solid transparent;
            border-top: 200px solid #bd5e68;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            position: relative;
            top: 0;
            margin: 0 auto;
        }
}

@media (max-width: 350px) {
    .triangle-down {
        width: 0;
        height: 0;
        border-left: 145px solid transparent;
        border-right: 145px solid transparent;
        border-top: 180px solid #bd5e68;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        position: relative;
        top: 0;
        margin: 0 auto;
    }
}

@media (max-width: 320px) {
      .button-trigger {
        margin-right: -10px;
    }

    .person-details {
        margin-right: 20px;
    }
    .triangle-down {
        width: 0;
        height: 0;
        border-left: 125px solid transparent;
        border-right: 125px solid transparent;
        border-top: 180px solid #bd5e68;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        position: relative;
        top: 0;
        margin: 0 auto;
    }

        @keyframes animatedTriangleDown {
            from {

            }

            to {
                border-top: 0px solid #bd5e68;
                border-left: 125px solid transparent;
                border-right: 125px solid transparent;
                opacity: 0;
            }

    
        }
}
</style>