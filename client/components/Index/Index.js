import React from 'react';
import {Link} from 'react-router'

class Index extends React.Component {
    render() {
        return (
            <div style={{maxWidth:600}}>
                <h2>Organic Chemistry for Students, by a Student</h2>
                <p>
                    Like a lot of students, you're probably taking organic chemistry because it's required for your degree
                    or desired grad program. That's fine. I was in the same position back when I started the course.
                    After making my way through organic I and II, I tutored over 200 students in organic chemistry and
                    helped them pass this difficult course.
                </p>
                <p>
                    This site is a collection of practice problems which cover material frequently seen on the ACS final
                    exam. The best source of ACS practice problems is  <cite>Preparing for Your ACS Examination in Organic Chemistry : The Official Guide</cite>,
                    which is published by the ACS. I highly recommend you buy this guide if you're taking the ACS exam.
                    It is your Bible. The problems on this site supplement the official guide, but cannot replace it.
                </p>
                <p>
                    So get going! If you've just started the course, then you probably want to check
                    out <Link to="/topic/stereochemistry">Stereochemistry</Link> first and navigate the list of topics from
                    there. You might not know all the topics yet, but you should be able to work all the problems before
                    you take your final exam!
                </p>
            </div>
        );
    }
}

export default Index;
