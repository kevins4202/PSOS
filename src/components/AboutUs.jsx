import soph_ph from "../assets/images/profiles/soph_ph.png"
import jess_ph from "../assets/images/profiles/jess_ph.jpeg"
import sarah_ph from "../assets/images/profiles/sarah_pic.png"
import erika_ph from "../assets/images/profiles/erika_ph.png"

const AboutUs = () => {
  return <>
    <div className="aboutus-intro" >
      <p style={{ fontFamily: "Jaldi", fontSize: "50px", textAlign: "center" }} >ABOUT US</p>
      <p style={{ fontFamily: "Marmelad", textAlign: "center", margin: "0 25px 0 25px", fontSize: "25px" }}>
        Founded in 2022 by Sophia Xia in Deerfield, IL, Project Save Our Skin (PSOS) has grown into a
        nationwide charity with a mission to improve skin health and disease awareness. Our organization
        is dedicated to two primary objectives: providing essential skincare products to marginalized
        communities and educating the public about skin health. Shockingly, 20% of Americans will face
        skin cancer in their lifetime, a statistic we are committed to reducing.
        <br></br><br></br>
        Over the past two years, PSOS has partnered with numerous institutions to organize city-wide
        skincare product donation drives and skin cancer education workshops. Collaborating with schools,
        fitness centers, corporations, and more, we have donated over 1000 products to homeless shelters,
        women’s shelters, children’s shelters, and other community organizations. Additionally, we have
        introduced skin cancer education resources into schools and hosted fundraising events and pop-ups
        to promote healthy skin practices.
        <br></br><br></br>
        In 2024, PSOS opened a second chapter in Ann Arbor, Michigan. Between the Chicago chapter and
        Ann Arbor Chapter, PSOS has expanded to include over 20 dedicated members across the United States.
        We invite you to join our growing community and contribute to our mission of ensuring everyone has
        access to resources for healthier skin.
      </p>
    </div>

    <div className="aboutus-div">
      <p style={{ fontFamily: "Jaldi", fontSize: "52px", marginTop: "10px" }}>EXEC BOARD</p>
      <div className="member-div">
        <img src={soph_ph} className="img-left"></img>
        <span className="span-right">
          Sophia Xia is the founder and president of Project Save Our Skin. She is a student at the University of Michigan
          studying Biochemistry and International Studies. She’s passionate about global health equity as well as educating
          the youth about making healthy choices.
        </span>
      </div>

      <div className="member-div">
        <span className="span-left">
          Erika Ilkiu is an exec board member at Project Save Our Skin. She is a committed swimmer who enjoys painting and drawing. She is is very excited
          about the idea continuing to swim competitively in college!
        </span>
        <img src={erika_ph} className="img-right"></img>

      </div>

      <div className="member-div">
        <img src={jess_ph} className="img-left"></img>
        <span className="span-right">
          Jessica Ji is an exec board member at Project Save Our Skin. She plays the cello and loves to dance. She would love
          to continue her journey of dance in college if possible!

        </span>
      </div>

      <div className="member-div">
        <span className="span-left">
          Sarah Wang is a donation counter at Project Save Our Skin. She is a swimmer who spends free time with family and baking. She is is very excited to help Project Save Our Skin grow and reach more people in need!
        </span>
        <img src={sarah_ph} className="img-right"></img>

      </div>
    </div>
  </>
}

export default AboutUs;