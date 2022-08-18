<template>
  <div>
    <section id="service" class="atf-service-area atf-section-padding our__team">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-sm-12 first__col">
            <h1>Our Team</h1>
            <h5>
              Sukseskan Usaha Anda Bersama Kelontong<i class="fas fa-lg fa-fw fa-store"></i>
            </h5>
          </div>

          <div class="col-lg-12 col-sm-12 second__col">
            <div class="row">
              <div v-for="team in teams" class="col-md-4 col-sm-12">
                <div class="card__team">
                  <div class="card__header-team">
                    <div class="avatar">
                      <div class="user-online-indicator"></div>
                      <img
                      :src="team.img"
                      alt="user-image"
                      />
                  </div>
                  <div class="profile-name">
                    <h1>{{team.name}}</h1>
                  </div>
                  <div class="profile-role">
                    {{team.jobs}}
                  </div>
                </div>

                <div class="card__footer-team">
                  <div class="social-buttons">
                    <a :href="`https://www.instagram.com/${team.instagram}`">
                      <i class="fab fa-instagram"></i>
                    </a>

                    <a :href="`https://www.linkedin.com/in/${team.linkedin}`">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
data() {
return {
teams: [{
id: 1,
name: 'Fitra Muttaqin',
jobs: 'Founder, CEO & Retail Strategy',
img: require('~/assets/images/team/team1.jpg'),
linkedin: 'fitra-muttaqin-40b8a6142',
instagram: 'fitra.muttaqin'
},
{
id: 2,
name: 'M. Taufik. Aji',
jobs: 'Founder & Bussiness Development',
img: require('~/assets/images/team/team2.jpg'),
linkedin: '',
instagram: ''
},
{
id: 3,
name: 'Puji Ermanto',
jobs: 'Founder & Technology Strategy',
img: require('~/assets/images/team/team3.jpg'),
linkedin: 'puji-ermanto-1b619782',
instagram: 'pujiermanto'
}]
}
},

mounted() {
this.gsapSetting()
},

methods: {
gsapSetting() {
let tl = gsap.timeline();

console.log("New");

tl.from(".card", {
stagger: 0.2,
opacity: 0,
x: -20,
});

tl.from(".avatar img", {
stagger: 0.2,
opacity: 0,
y: 20,
});

tl.from(".user-online-indicator", {
stagger: 0.2,
opacity: 0,
y: 20,
})
tl.from(".profile-name", {
stagger: 0.2,
opacity: 0,
y: 20,
})
tl.from(".profile-role", {
stagger: 0.2,
opacity: 0,
y: 20,
})

tl.from(".social-buttons", {
stagger: 0.2,
opacity: 0,
})

}
}
}
</script>

<style lang="scss" scoped>
.our__team {
.first__col{
h1{
text-align: center;
font-size: 3rem;
font-family: 'Poppins';
font-weight: 700;
}
h5 {
font-size: 1rem;
font-weight: 400;
text-indent: 25px;
text-align: justify;
letter-spacing: .5px;
word-spacing: .8px;
font-family: 'Poppins';
text-align: center;
i{
margin-left: -1rem;
}
}
}
.second__col {
.card__team {
margin-top: 2rem;
margin-left: .3rem;
width: 350px;
height: 270px;
background-color: #fff;
display: flex;
flex-direction: column;
border-radius: 10px;
padding-top: 25px;
cursor: pointer;
justify-content: space-between;
padding-bottom: 15px;
.card__header-team {
display: flex;
flex-direction: column;
align-items: center;
.avatar {
width: 100px;
height: 100px;
position: relative;
.user-online-indicator {
width: 15px;
height: 15px;
background-color: #53f45a;
position: absolute;
bottom: 10px;
right: 8px;
border-radius: 50%;
z-index: 4;
}
img {
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 50%;
}
}
.profile-name {
h1{
font-size: 28px;
font-weight: 500;
margin-top: 1rem;
}
}
.profile-role {
color: #6d6d6d;
font-size: .8rem;
font-weight: 500;
word-spacing: 2px;
margin-bottom: 1rem;
}
}

.card__footer-team {
width: 85%;
height: 90px;
margin: 0 auto;
display: flex;
align-items: center;
.social-buttons {
margin-bottom: 2rem;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
}
.social-buttons a {
width: 40px;
height: 40px;
border: 1px solid transparent;
border-radius: 50%;
font-size: 23px;
margin: 0 20px;
}
}
}
}
}

@media (min-width: 992px) {
.our__team {
.first__col{
h1{
text-align: center;
font-size: 3rem;
font-family: 'Poppins';
font-weight: 700;
}
h5 {
font-size: 1rem;
font-weight: 400;
text-indent: 25px;
text-align: justify;
letter-spacing: .5px;
word-spacing: .8px;
font-family: 'Poppins';
text-align: center;
i{
margin-left: -1rem;
}
}
}
.second__col {
.card__team {
margin-top: 2rem;
width: 290px;
height: 330px;
background-color: #fff;
display: flex;
flex-direction: column;
border-radius: 10px;
padding-top: 25px;
cursor: pointer;
justify-content: space-between;
padding-bottom: 15px;
.card__header-team {
display: flex;
flex-direction: column;
align-items: center;
.avatar {
width: 150px;
height: 150px;
position: relative;
.user-online-indicator {
width: 15px;
height: 15px;
background-color: #53f45a;
position: absolute;
bottom: 10px;
right: 8px;
border-radius: 50%;
z-index: 4;
}
img {
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 50%;
}
}
.profile-name {
h1{
font-size: 28px;
font-weight: 500;
}
}
.profile-role {
color: #6d6d6d;
font-size: .8rem;
font-weight: 500;
word-spacing: 2px;
}
}

.card__footer-team {
width: 85%;
height: 90px;
margin: 0 auto;
display: flex;
align-items: center;
.social-buttons {
width: 100%;
display: flex;
align-items: center;
justify-content: center;
}
.social-buttons a {
width: 40px;
height: 40px;
border: 1px solid transparent;
border-radius: 50%;
font-size: 23px;
margin: 0 20px;
}
}
}
}
}
}
</style>