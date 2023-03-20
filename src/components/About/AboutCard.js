import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<div className='d-flex'>
						<ul>
							<li className='about-activity'>
								- <span className='purple fw-bold me-2'>Birthday: </span>1 April 2002
							</li>
							<li className='about-activity'>
								- <span className='purple fw-bold me-2'>Website: </span>1 April 2002
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
