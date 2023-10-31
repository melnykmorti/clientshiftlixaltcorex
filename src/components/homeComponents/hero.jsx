import React, { useState } from "react";

import { useHistory } from "react-router-dom";

export const Hero = () => {
	const [keyword, setKeyword] = useState();
        let history = useHistory();
	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push("/");
		}
	};
	return (
		<div className="hero ps-5">
			<div className="bg"></div>
			<div className="d-flex justify-items-center flex-column element">
				<div className="row">
					<div className="col-xl-5 col-md-12">
						<h1 className="mt-5">Найди идеальный курс</h1>
						<h1 className="fw-bold">Для Себя</h1>
					</div>
				</div>
				<div className="row">
					<div className=" col-md-11">
						<div className="form-object">
							<form onSubmit={submitHandler}>
								<button type="submit" className="">
									<img src="../search.svg" alt="search"/>
								</button>
								<input
									type="search"
									placeholder="Поиск"
									onChange={(e) => setKeyword(e.target.value)}
								/>
								<button type="submit" className="search-btn">
									Искать
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;