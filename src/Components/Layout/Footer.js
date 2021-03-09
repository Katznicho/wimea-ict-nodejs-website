import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__rights">
                <img 
                className="footer__logo"
                alt="not found"
                src="http://wimea.mak.ac.ug/wp-content/themes/masterstudy/assets/img/tmp/logo_transparent.png"
                ></img>
            <p className="footer__text">Copyright &copy; 2021 wimea-ict</p> 

            </div>

            <div className="footer__paterner">
                <div className="footer__info">
                    <h2 className="footer__text">Our Partners </h2>

                </div>
                <div className="footer__images">
                <img
                className="footer__image"
                alt="not found"
                src="https://i.pinimg.com/564x/76/11/7e/76117e0b3d563077d8c84c748ad89835.jpg"
                ></img>

               <img
               className="footer__image"
               alt="not found"
               src="https://www.unma.go.ug/wp-content/uploads/2020/12/UMNA-Logo-New.png"
               ></img>
               <img
               alt="not found"
               src="http://dublinenergylab.dit.ie/media/styleimages/dit_crest.gif"
               >
               </img>
               <img
               className="footer__image"
               alt="not found"
               src="https://sdgintegration-atypicainc1.netdna-ssl.com/sites/default/files/Norwegian%20Agency%20for%20Development%20Cooperation.png"
               >
               </img>
               <img
               className="footer__image"
               alt="not found"
               src="https://upload.wikimedia.org/wikipedia/en/1/12/Uni-Bergen-emblem.png"
               >
               </img>
               <img
               className="footer__image"
               alt="not found"
               src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUTBxIVFhUWFRkbGRUYGCAgGBoaIB4cIh0dHhskICgsHiAnHScgITElJSorLi8uGB8zODMuNyotMysBCgoKDg0OGBAQGzUlICU1LisyNTM1LzUtLS0yNjUtKystKy0tNTcvLSs3ODgtMi0yMi0rLS0uNS0rLS0vLSs3Lv/AABEIALEBHAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGBwMCAf/EAEQQAAEEAQMCAwQGBQkIAwAAAAEAAgMRBAUSIQYxE0FRIjJhgQcUI0JxoTNSkZKxFTVDYmNygqKyFjRzs8LR0vAkJlP/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAgEDBAUG/8QALREBAAIBAwICCQUBAAAAAAAAAAECEQMhMRJBBFETYYGRobHB0fAiIzJx4RT/2gAMAwEAAhEDEQA/AO4oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi8crJjxoi6UgAAkkmmgDuST2A9VkJfpEwZXH+SIMnJA+/FFUZ/CR5aCPiOPRZa0V3kbVFgndV9SZH+7YDGfGbJFj/DG0/xUZ+V1fkPuTIxYR6R45e79576P7F57eL0a82hXRbydF3Bftrmzf8AauD9BqIk+E2Mwj/IWEKSzX+rsUfbY+LMPMskfGf2OaR+ayvjNG3Fm+jt5OgIsMzrueD+cNPy2AfeZslb/ldf5K+0DqfTNehLtNk3beHtILXsP9ZjuQvRW9bfxnKZiY5XaIipgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgwn0pO+t4mLjE+zkZsTJB6xtDpHA/DgKh1+bXcfIYNK8FmPsG+RxAMdOFi3OAos4bTe45IVr1s4ZPXeBGP6OPKlI/wtY38yV9ZmDFmV4xdwKIBoOFg0ePUA+RHPqV8jx+rFdWsTxh30q5iWKzhmZEtZeolrq3eHA4uaSOdo5aAQ5rxR7h7Bz5+sOjadpz4pc2bJdIQ2QM2F7hsfv20ASBZLa8/kr3VdTfpeTHjaJAx00oc4N4ZExrat7yB28gAL/JVOZ1ZqeJO7HkZj+PbG+Kx7jDFu4Bktth19m3za50nV1IjpjEeyNvPhUxWOXjlaRh5GGTlOyxHAyaQSPb7ftPjeWgFgv3RXPuuINeXpJp0WnSt8DNkDi1p2uDhYO73iHgAnfdnzAd5BfWbq2b0q8R5Mn1zexz9vAlaRy5xABAi7kE1VVyp8Wu6njwsfrUUPgSloD4ZC4NLvd3hwFg9rFiyFX7uImN47ev2TDI6VVNndR6ePEiycaaM1QDmm3UTtBJbQdQDTuNXVHyuIt+H17ps0oaHzMlhlLRQcdgcO5JIDgQLJ8lZP0bTJT7cEfybQP413445vuVWdXPdDkYUw/o8+G/wfbT/FR4bxFba9MRjzbekxWXV4v0Y/Bfa84CCzj1P8V6L7jzM5qOo6xDqxhxnQe1tLC6NxoOLh7VSCyNp7VfHZS+oc3PwRGcExU94YQ9ridx90ghw44N8eagay9sHUrHy8NDYuT24fICfwG4E+lqV1Q9rvq7Gn2jkRkDzrkE16Cxz8QvLFpxqb8T9IwuY4eetapqWmZEQLoCHt82OFyCrAO/gG+O5Fea/dX1vIi0T6xp2ymkB7HtJcCSG1w4UQTz3BHI8r+tcjZN1BhtlALXeOCD2IMZsEKg6hwcjAgkja72HtBBPO4MIdR/tG1V/eab5r2Y1b3pNp7cf1ONp/ptYicLvXNS1bSoWu3Qn7Ml32bvfaLNfacNI7XyK874/dXztb05jSDA7c2uI3cyAE0PtOxANHypefXH+4f4Jf8ASrnVsQ5unuYz3qtv94ct+V8H4Eq7ddralaz2jBGIiJlXapqWdi6XC/GdE98ha33HbXlw42Df7PzJXhq+pazpobuMBuNzj7D/AHm1Y9/sbHPwKi9Oslz85nij7PHYSy+5LydoI/qjgDuNgPmpHWfIbf8A+U3/AEKbak20p1I24/37ERi2EyDJ1uLUo2ZzYnMfYLomutvsuILrPAJFA1V+Y4uEdS106k6GI45cHEWWPAI2hw++fIgftUjGxY9F1YuyJXSeMI42F/tS2C8kGgPYFj8C433Crc+PKl6hlGCafuvjuQIY7aD5Ejz8luraaxXGefaVjOV3oGrO1KIiYAOaGuNdi110as0bBFWew554gYuqaxqkb5NNEIaCNrHWXkEBwvkCyCPQXYuhZ+uk5cdmO9rAd45+LmfdAB7bfdI8jyfe5rziY8ml/WtLeWta0nYeJGAcljXtPHwabBsC6IUxqXnTrbnnPafyO8bGIzMLTM1PUm6fBLCGM3inskjfuDi2xQ3NI7EURfI9OfmLO13Ihg+rth3SRmR7yx4jAJG1oO73qPPrV8BeOXky5ehQuyOXeM4X67fEaD8wL4454V1on8ywf8GP/SF0pM3vMZ2xWffn54ZO0e9SYep6/mzuZB9W3MLwba8C2vLeDuPci/JMrVtdhw2SFkY3Bw2ujcHCRt8H7TgOokH8zwT9dNfzvP8A35v+c9XWsQtn0uQP/VJHwI5afkQD8lOnF76UzE77/OcNnEWVWVqepPy4Y9MfA4yQh5JY6h29ug+ww+Q5NgAnmxoBdcrPdIQRjxnge14gb3PA2Ndxfblx7eg9Fol20bddIv57ptGJwIiLqkREQEREBfhX6o2pZIw9PkkdxsY537oJQc2ychmf9JWU9hBbBixxgg8AueXO5+X5Kbj6pgZMu3HlY48cBw5sXx68el9j6LBdKiXO6a1Gb70lM+NMis/OnEqjxYZBI+TGd+iLSHAm7LtrS38TRo9hfovjeK0Y1dW0zPGI+C/SzpxWIjlt9QfPruukaIC1+M17HzucWi3VcQaBuP628VtO0i7p0XDzYjhHT9CxmiY7hMJadHH+s+R3Pil3cDzrmhwp/UML8rqaKLT/ALOV0L3GayLYDtEbgPfFnuKLb4PJuulfpGBpAjnjfjZMJqMRgulc93mw/wBM155N9652lvs3THo6xEeWI8ud533jPu+dzP6plYMx/wDZCQyyASQOa1r5e0sVdgTdvjvtyXN4u+4qziPzMV2RiQubhiUS/Vi/aXhnJla3szmyYzwe4o2DJfNEM8S9aEtMLA6OMi4CexkaAPbkuhtdy0mgKLSoebjk44mzIXR4kuSy8RzyCdx4k2j3bdy6LkEHdwQbqkTnNt7T37T6o9fr7E47cNxp+fj6lgtlw3bmPFgqm6+H/wBWkc3vG6OT9x7T/C1+9XTZ2DpYOmbWtBAd5EA01oaPIX6C+3IWe0h+dqnSGaMp73tMbw0u552WaPf0NHjlfP0dPFo1Y4z9XS2pv0Ty7ToOTDlYFwm6cQ74O8x/D5FWS579EuqjO+ss8wMaX5Swj/xK6Ev0jyo+ZhY2cwDKbddjyCPwI5HyUbT9D0zTpd2HEAfWySPLiya444ViinprnON25lBy9IwczI35LLcK53OHY2OAfVe2dhY+fjlmW3c0+VkfsI5Hpx5EqQqTqLUZ4HMiwjte8i3fq7nBrf2uPfnhrvOisvNaVmZ/OxGZlOzNKws2bfkst23be5w471wQpOPBHjQBkAprRQHoFn9Q0vI07EMuNk5BLOXb5Lbt+8aPHA55BFAjvyGflSZuhCXc9kjJGtcGOLQSXtabo9i07hzYsc91znViszmN8Z/uG9OV9jYkGLu+rtre8vd8XHuVHy9IwcyffkMJcRV7nDj04IWcihe/FiMGXN48jneGx0jjGS3c4h1AkANB5PF0Dd0dbkRCeBzSXCwRbTTh8QfIq64vG8bMnZAw9A0vCnD8WINcOxt3oR2v0J/an8gaZvvw+d2733e961u7qn6XjkzonnIlmNwsH6V3BdZLhzw7gUfL5lenSPizyF80krqij4dI4tt12aJ78D81ypelunFec/BUxMZ3XD9HwH5glLKeHbgQ5w9r1oGufPjnzXg7pvR3TbjCLFVTnACuwDQaA+FKLhwPHVEgMspa0F4aZHFturir7CzQ8vkKpJS6HIkY/JmaGNm2XM4lzmuaGNNm3cGqHJ9bW3vWIjNeZmPn9iInza7K0rCygzxmfowQyiW7Qa4FEeQC9cbCx8XE8PHbTOeLPnd83ag9NZGRk4BM5LgHkMefvMppu/OiS2/MNHfuauPWJHdRFxLvC3eEOfYcLALg26JEtDd+q5b6WkRW+OcfHzZ0zwusTRdPw5mux2UWghvtONA9+CVJzMSDOxyzKbuaasWRdG/L4r3RdorERiE5Q8PTMPClLsZpDiKJLnGx8yVMREiIiMQCIi0EREBERAWU+lXLGF9HuY4mrhLP3yGV+a1azH0k6Dk9SdHzQYJHiHa5gPYljg7bfldVfxQc06BdDp/0fmXNDiwmZ7wBZ2A7TxY7Nb63S8/o/ZpupeOGF3iNma4xFtFrAXFvqHA7j2N8D5xul+rsTScUYXUEboJIraQWnsSTT29757jcCDfHnYs6Z0jUnB+iytJaKaWOqRjaI27hztAJA3M3AGrAXyb6eLanXmMztPZ22npmN8NPqWkYmpxtE4cHMNsexxa9nlw4eRHcGwfMLOZmB07hyH63kyunNFsxkL5Y6Ps1Q2tFjltc1R4WqaPHi25Q57EkcE+vBPf0NX6eSoJumsPJYx08kj3B4a6R7gDJTbIYzdxwbAa0jiuxtefwX8pra04jy/OF6vGYiFfjw6ZqU5d1JltneAWxtAdHHGKrcPSQ9y6+Ow9Tb4GgaY/IZK6WXILOY/Fl3tZ8Wtqr+JtQMHpGMzxh53F5eHM37aPO3w3Hbuc3sb+NjyVnh4+n6HjOdH4h3Vw7l/4BoAq+OPOwvR4vpiv7Vrb+rEf4jSmc/qiHn1pHlT6C5uE1znFzeGizQN3X4rx6OxXs6c2StLS58vDgQeTXYhQ9Vdr2bhlxczHZd3I/ZVEuFkc9qae27aeAHcQI+qtI6Y0vYyUzv7gNsMFABrQ93G0AC9tkm3VzS89dC3oumu857fWVTMek6pWX0K5Yb1Bsf3fp0fzMMr4j+zhdnXH/AKGdG1WbURm5kRihEErGbhTpDJL4hcGnswdhfe/xXYF955xERAWe6nw5/EbNjCy0CwATRa7cw0OaDrBqzyPIFaFFGppxes1lsTicszn9RYGo6c6LCLnSSNLDGGkubYpx4sGhfYm69OV8agxum9PBmWQ2SWVjq/B7CRfb2WAAntY+K1KKLaPVmZnfGGxbDMdOYOm5YjmxyfFie8u2n3i4PFOscijYI9O9WDp0UfPjyJsNzcNwY8ig4i9vqasc1dfGldKRSuIZM5lQ9ED/AOK4/wBSIfPaT/Aj9qi6TqGN0/kOZqp2eyxoJB5LC7mhzRBBBHHBBo8LSaXp8OmYgZB+JPmTwP4AAegACmLjTRmK033j6qm28qHRJPr+rTZEQIjIa1jiK3cCyAfLj867ggUcOdpD9Uc/OLXRHxiPZLuS9paQACQauj/3W6RXbS6orvxOfn92RbGWFw9QdpOmymPc0PaBED5v5tw8iWtLST2ceAbX3maVh4GjRSCd7mupoaXfZkScu2CgW/rd+zStuij/AJo6OiZ7Y/Pzs3r3yrtC1JmpYIO4F7fZfXbcPMfA9x+KsUReiImI3QIiLQREQEREBERAREQVet9O6Pr0W3V8eKX0LmguH4O7j5FYHVfoY08u3dP5U2OeKa77Rgqu105vn97+C6kiDiuTpn0jdMcljcyJv3mHe6uPuOp5PwaT2XxgfSDo2MyMZnixyt2l0b4qr2Y2mrdfdnHwJBu+O2Uoep6Tp2rQbNUhjlb6SNDh8r7KYpWJmYjdszMuYzfSX04CPHc4MDy+nRguvxPEaW836X+HFd1Ufyn1T1HkuHSONKIrYPGewRj3WtJ3Pu+QTTRYFLq+kdI9O6LJu0vEhjd+uGAv/eNkD4WrlzGuHtC//eEvStuYImYcfwfof1PUnh/VOcb82xW53P8AayXXybS2mifRt0pozg6DGa94o+JN9o6xVH2uAfPgBa5FsRhh27IiLQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q=="
               >
               </img>


                </div>
                            </div>

        </div>
    )
}

export default Footer
