import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<div className='row'>
						<ul className='col-12 col-sm-12 col-md-6 col-lg-6'>
							<li className='about-activity'>
								- <span className='purple fw-bold me-2'>Birthday: </span>1 April 2002
							</li>
							<li className='about-activity'>
								- <span className='purple fw-bold me-2'>Website: </span>
								<a
									className='text-decoration-none text-white'
									href='http://techpro.uz/'
								>
									TechPro.uz
								</a>
							</li>
							<li className='about-activity'>
								- <span className='purple fw-bold me-2'>Phone:</span>{' '}
								<a className='text-decoration-none text-white' href='tel:+998919104910'>
									+998919104910
								</a>
							</li>
							<li className='about-activity'>
								- <span className='purple fw-bold me-2'>City: </span>Tashkent,
								Uzbekistan
							</li>
						</ul>
						<ul className='col-12 col-sm-12 col-md-6 col-lg-6'>
							<li className='about-activity'>
								- <span className='purple fw-bold me-2'>Age: </span>21
							</li>
							<li className='about-activity'>
								- <span className='purple fw-bold me-2'>Degree: </span>High
							</li>
							<li className='about-activity'>
								- <span className='purple fw-bold me-2'>Email:</span>{' '}
								<a
									className='text-decoration-none text-white'
									href='mailto:husanovjamshid@mail.ru'
								>
									husanovjamshid@mail.ru
								</a>
							</li>
							<li className='about-activity'>
								- <span className='purple fw-bold me-2'>Freelance: </span>Available
							</li>
						</ul>
					</div>

					<p style={{ color: 'rgb(155 126 172)' }}>
						"Strive to build things that make a difference!"{' '}
					</p>
					<footer className='blockquote-footer'>Jamshidbek</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
