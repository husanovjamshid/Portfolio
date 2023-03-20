import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiGit,
} from 'react-icons/di';
import { SiFirebase, SiNextdotjs, } from 'react-icons/si';
import {SiMui, SiTailwindcss, SiRedux} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import {DiSass} from 'react-icons/di'

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className='tech-icons'>
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiReact />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiRedux />
			</Col>
			
			<Col xs={4} md={2} className='tech-icons'>
				<SiNextdotjs />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiGit />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiMui />
			</Col>
      <Col xs={4} md={2} className='tech-icons'>
				<SiTailwindcss />
			</Col>
      <Col xs={4} md={2} className='tech-icons'>
				<BsBootstrap />
			</Col>
      <Col xs={4} md={2} className='tech-icons'>
				<DiSass />
			</Col>
      <Col xs={4} md={2} className='tech-icons'>
				<SiFirebase />
			</Col>
		</Row>
	);
}

export default Techstack;
