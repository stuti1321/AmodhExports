import React from 'react'
import thread from "../Assets/thread.png"
import shapes from "../Assets/colour.png"
import size from "../Assets/size.png"
import fabric from "../Assets/fabric.png"
import create from "../Assets/creativity.png"
import "../styles/Customdetail.scss"

const customdetail = () => {
  return (
    <div className="details">
        <div className="design">
            <div className="iconcustom"><img src={create} alt="" /></div>
            <div className="customde">
                <div className="de"><h2>Design</h2></div>
                <p>You can choose or create a design for your carpet, incorporating patterns,
motifs, or images that resonate with your taste and decor theme. This can range from
simple geometric patterns to intricate designs or even custom artwork.</p>
            </div>
        </div>
        <div className="design">
            <div className="iconcustom"><img src={size} alt="" /></div>
            <div className="customde">
                <div className="de"><h2> Size and Shape</h2></div>
                <p>Customization enables you to specify the dimensions of the carpet
to fit in exact measurements of your space. You can have it made in a specific
shape, such as rectangular, square, round, or even irregular shapes to suit unique
areas.</p>
            </div>
        </div>
        <div className="design">
            <div className="iconcustom"><img src={shapes} alt="" /></div>
            <div className="customde">
                <div className="de"><h2>Colour</h2></div>
                <p>You can select the colours that match your room’s colour scheme or create a
contrast to make the carpet stand out. Customization often allows you to choose from
a wide range of colour options or even request specific dyeing techniques for a more
personalized look.</p>
            </div>
        </div>
        <div className="design">
            <div className="iconcustom"><img src={fabric} alt="" /></div>
            <div className="customde">
                <div className="de"><h2>Materials</h2></div>
                <p>Customization might also involve selecting the type of material to be used
for your carpet. Choices can include natural fibres like wool or silk, synthetic
materials like nylon or polyester, or a combination of different materials.</p>
            </div>
        </div>
        <div className="design">
            <div className="iconcustom"><img src={thread} alt="" /></div>
            <div className="customde">
                <div className="de"><h2>Finishing Touches</h2></div>
                <p>Additional customization options can include choosing the type of
edging or binding, adding fringe or trim, selecting the pile height (the length of the
carpet fibres), or specifying other details that contribute to the overall appearance
and functionality of the carpet.</p>
            </div>
        </div>
    </div>
  )
}

export default customdetail
