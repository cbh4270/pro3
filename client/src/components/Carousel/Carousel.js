import React from "react";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";

export default (props) => (
  <Carousel onChange={props.handleInputCarousel} selectedItem={props.userState.imgUrl}>
    <div >
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_l/public/all/2020/01/Bobby_Lashley_Pro--e616d36efc1e4b1919a8d771bc2e11ad.png" />
      {/* <p className="legend">Legend 1</p> */}
    </div>
  
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/06/Alexa_Bliss_Pro--49a77df0d99b502557cadcdd55f46eae.png" />
      {/* <p className="legend">Legend 4</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Alexander_Wolfe_Pro--3bdac11d8fef63ed74af2d935ff833dd.png" />
      {/* <p className="legend">Legend 5</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Andrade_Pro--e74f5297207b805ca50603ab14288466.png" />
      {/* <p className="legend">Legend 6</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/09/Alyse_Zwick_Profile--766fed99301325431073eb6f1c9431f2.png" />
      {/* <p className="legend">Legend 7</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/09/Angel_Garza_Pro--12c90ef3a57a9bde157c6182d3a4393e.png" />
      {/* <p className="legend">Legend 8</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Arturo_Ruas_Pro--67de7efb50fb23ada701ab5517d5ab1f.png" />
      {/* <p className="legend">Legend 9</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Austin_Theory_Pro--8259f95644ddaa244e47b5305f5723f0.png" />
      {/* <p className="legend">Legend 10</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/04/Bianca_Belair_Pro--0f656f695b59ac8b5c7c136a285ef9ff.png" />
      {/* <p className="legend">Legend 11</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Big_Show_Pro--d9e95033fbd8c3000fe07c132d6240c5.png" />
      {/* <p className="legend">Legend 12</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Brock_Lesnar_pro.png" />
      {/* <p className="legend">Legend 13</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Carmella_Pro--5ec7c02168ea1ad773b25e8cfef076d0.png" />
      {/* <p className="legend">Legend 14</p> */}
    </div>
  
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Corey_Graves_Pro--fab149c2bfbf286ba1577b275b0d9ffa.png" />
      {/* <p className="legend">Legend 14</p> */}
    </div>
 
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/David_Otunga_Pro--fdaafa279d37106d9ce2733714579da0.png" />
      {/* <p className="legend">Legend 14</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Dexter_Lumis_Pro--d09cc0edff80e5623b26d884efb53fc4.png" />
      {/* <p className="legend">Legend 17</p> */}
    </div>
    <div>
      <img alt="" src="https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2018/05/Charlotte_pro--b32f35e8b46a884b909cc091908cf52b.png" />
      {/* <p className="legend">Legend 14</p> */}
    </div>
 
  </Carousel>
);
