import React from "react";
import profilePic from "../assets/images/profile-pic (6).png";
import profilePic2 from "../assets/images/profile-pic (2).png";

// const AboutUs1= () => {
//   return (
//     <div className="h-96	 flex flex-wrap items-center justify-center">
//       <div className="flex justify-end px-6">
//         <img src={profilePic} alt="" className="h-1/2	w-1/2 " />
//       </div>
//       <div className="w-1/2 text-4xl font-bold">
//         {" "}
//         <p className="my-2">My Name Is Faisal</p>
//         <p>Web Developer</p>
//       </div>
//     </div>
//   );
// };

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: profilePic,
      text1: "My Name Is Faisal",
      text2: "Web Developer",
      bg: "#FFE4A5",
    };
  }

  render() {
    return (
      <div className="h-96	 flex flex-wrap items-center justify-center">
        <div className="flex justify-end px-6 w-[20%]"> 
          <img src={this.state.pic} alt="" className="h-1/2	w-96 " />
        </div>
        <div className="w-1/4 text-4xl font-bold">
          <p className="my-2">{this.state.text1}</p>
          <p>{this.state.text2}</p>
          <button
            className={`text-2xl border border-black rounded-lg px-4 py-1 mt-6 bg-[${this.state.bg}]`}
            onClick={() => {
              this.setState({
                pic: profilePic2,
                text1: "Let's Connect And",
                text2: "Code",
                bg: "#FF416C",
              });
            }}d
          >
            Change
          </button>
        </div>
      </div>
    );
  }
}

export default AboutUs;
