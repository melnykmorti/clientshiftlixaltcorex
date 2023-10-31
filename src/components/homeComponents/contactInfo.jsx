import React from "react";
const ContactInfo = () => {
	return (
		<div className="contactInfo container">
			<div className="row justify-content-center text-center ">
				<div className="col-md-3 d-flex flex-row">
					<img src="https://crosscourse.online/computer.jpg" alt="онлайн" />
					<p>
						Множество онлайн курсов.Исследуйте разнообразные актуальные темы.
					</p>
				</div>
				<div className="col-md-3 d-flex flex-row">
					<img src="https://crosscourse.online/teachers.jpg" alt="учителя" />
					<p>
						Курсы не являются профессиональными, т.к. они состоявляются лично нашими менеджерами.
					</p>
				</div>
				<div className="col-md-3 d-flex flex-row">
					<img src="https://crosscourse.online/maninheadphones.jpg" alt="онлайн" />
					<p> Учитесь в собственном темпе. </p>
				</div>
			</div>
		</div>
	);
};

/* <div className="col-12 col-md-4 contact-Box">
<div className="box-info">
  <div className="info-image">
    <i className="fas fa-phone-alt"> </i>
  </div>
  <h5> Call Us 24 x7 </h5> <p> 0736 230 063 </p>
</div>
</div>
<div className="col-12 col-md-4 contact-Box">
<div className="box-info">
  <div className="info-image">
    <i className="fas fa-map-marker-alt"> </i>
  </div>
  <h5> Headquarter </h5> <p> Arusha Njiro Pepsi </p>
</div>
</div>
<div className="col-12 col-md-4 contact-Box">
<div className="box-info">
  <div className="info-image">
    <i className="fas fa-fax"> </i>
  </div>
  <h5> Fax </h5> <p> 0736 230 063 </p>
</div>
</div> */

export default ContactInfo;
