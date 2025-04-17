import { services } from '../../data'
import MagicButton from '../../commons/MagicButton'
import { PiPlugsConnectedFill } from 'react-icons/pi'
import useScroll from '../../hooks/useScroll' 
import './Services.css'

const Services = () => {
    const {scrollTo} = useScroll();
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>services</h2>
        <div className="container services__container">
        {services.map((service, index) => (
                <div className="service" key={index}>
                    <div className="circle-container">
                        <div className="outer-cirlce">
                            <div className='middle-circle'>
                                <div className="inner-circle">
                                    <img src={service.image}
                                    className='icon' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service__content">
                        <h3 className='title'>{service.title}</h3>
                        <p className="description">{service.description}</p>
                    </div>
                    <MagicButton 
                    title={"connect"}
                    icon={<PiPlugsConnectedFill />}
                    position={"left"}
                    isSpinning={true}
                    onClick={() => scrollTo('contact')}
                    className={"connect-btn"}
                    />
                </div>
            ))}
        </div>
    </section>
  )
}

export default Services