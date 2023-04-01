import React from "react";
import '../css/content.css'
const Content = () => {
  return (
    <div className="md:p-[6rem] pl-0 pr-0 justify-around">
      <div className="ourVision"></div>
      <div className="flex justify-around flex-wrap">
        <div className="aboutUS  md:w-[40%] md:m-0 m-10">
          <p className=" font-extrabold text-2xl">ABOUT US</p><br/>
          <p>
            Established in 2003 the undergraduate laboratory for 1st year B.Tech
            students is equipped with several experiments in different branches
            in Physics. The lab is divided into two sections, one is UG Physics
            Lab and the other is UG Physics Optics Lab. Laboratory work is a
            very important part of a course in General Physics. It reinforces
            the student's understanding of fundamental concepts and principles
            while, at the same time, helping the student to develop skill in
            carrying out scientific measurements. It is designed in such a way
            that the students can understand the basics of Physics through hands
            on experiments.
          </p>
        </div>
        <div className="container md:w-[45%] w-[350px]">
          <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cell 1</td>
                  <td>Cell 2</td>
                  <td>Cell 3</td>
                </tr>
                <tr>
                  <td>Cell 1</td>
                  <td>Cell 2</td>
                  <td>Cell 3</td>
                </tr>
                <tr>
                  <td>Cell 1</td>
                  <td>Cell 2</td>
                  <td>Cell 3</td>
                </tr>
                <tr>
                  <td>Cell 1</td>
                  <td>Cell 2</td>
                  <td>Cell 3</td>
                </tr>
                <tr>
                  <td>Cell 1</td>
                  <td>Cell 2</td>
                  <td>Cell 3</td>
                </tr>
                <tr>
                  <td>Cell 1</td>
                  <td>Cell 2</td>
                  <td>Cell 3</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
      <div className="labPhotos"></div>
    </div>
  );
};

export default Content;
