import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://i.pinimg.com/originals/71/d2/a8/71d2a8c3baf9bcc96043c4d2de438d09.jpg" alt="" />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://i.pinimg.com/736x/e2/f5/72/e2f572b1214ad8a6123fded20010ec5b.jpg" alt="" />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://www.atlasformen.co.uk/repository/sites/20/en-GB/Inspiration/classic3.jpg" alt="" />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://media1.popsugar-assets.com/files/thumbor/TJbWO6FlBA7yKneviD9op8eQ8No/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-:watermark-!popsugar-watermark_2x.png,-5,-5,0!-/2016/03/02/987/n/1922398/97a609f4ef4749a1_spl1239762_019/i/Charlie-Hunnam-Out-LA-March-1-2016.jpg" alt="" />
                            <button>
                                <Link className='link' to="/products/1">Sale</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://i.pinimg.com/736x/a5/93/e7/a593e77a0658e7ffd7d2ee705f6a4484.jpg" alt="" />
                            <button>
                                <Link className='link' to="/products/1">Sale</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://media.gq-magazine.co.uk/photos/624b014aee70fc9528be55e1/1:1/w_1080,h_1080,c_limit/04042022_DBS_HP.jpg" alt="" />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories
