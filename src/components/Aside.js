import React, { Component } from "react";
import '../styles/aside.css';
import Mak0 from '../videos/mak0.mp4';
import Yn3 from '../images/yn2.png';
export default class Aside extends Component {
    render() {
        var ok = 0;
        const playme = () => {
            let vd = document.getElementById("my-video");
            let as = document.getElementsByClassName("myvideo_ads")[0];
            let btnplay = document.getElementsByClassName("playbutton")[0];
            let btnpause = document.getElementsByClassName("pausebutton")[0];
            vd.play();
            
            btnplay.style.display = "none";
            as.addEventListener("mousemove", () => {
               
                if (ok === 0) {
                    btnpause.style.display = "none";
                }

                else  btnpause.style.display = "block";
                
            })
           as.addEventListener("mouseleave", () => {btnpause.style.display = "none";})
           ok = 1;
            
            
        }

        const pauseme =  () => {
            let vd = document.getElementById("my-video");
            let btnplay = document.getElementsByClassName("playbutton")[0];
            let btnpause = document.getElementsByClassName("pausebutton")[0];

            vd.pause()

            vd.addEventListener("pause", () => {
                btnplay.style.display  = "block";
                btnpause.style.display  = "none";
                
            })

            ok = 0;
            
        }

       

        return(
            <aside>
                    <div className="about_anime">
                        <div className="myvideo_ads">
                            <video id="my-video" poster={Yn3}>
                                    
                                    <source src={Mak0} type="video/mp4" />
                                    

                            </video>

                            <div className="playbutton" onClick={playme}>
                                <div className="btnds"></div>
                            </div>

                            <div className="pausebutton" onClick={pauseme}>
                                <div className="btndstop"></div>
                            </div>

                        </div>
                        <br />
                        <div className="giveme_about_anime">
                                <label>
                                    <div className="logo_anime_ads"></div>
                                    <span className="sp_b1">Kimi no Na Wa <i className="i_pp">1Episode</i></span>
                                </label>
                                <div className="save_anime">9.4</div>

                                <div className="disc_anime">
                                    <p></p>
                                    <p className="tt_disc">
                                    Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.
                                    </p>
                                </div>

                                <div className="btns_cust">
                                    <button className="cloc_tt"> ⭐ Add My Collection </button>
                                </div>

                        </div>

                    </div>
            </aside>
        )
    }
}