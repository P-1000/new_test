import React from 'react';
import Announcement from '../components/Announcements/Ann';

const Announcemnets = () => {
  const data = {
    "data": [
      {
        "body": "Hello LPU Students, Just a friendly reminder that AptiGuide’s Demo Session is happening TODAY!\r\n\r\nDate: September 7, 2023\r\nTime: 5:30 PM - 7:30 PM\r\nVenue: Room 13-109, LPU Campus\r\n\r\nJoin us to kickstart your success journey for CAT, GRE, GMAT, Bank PO/SSC, and more.\r\n\r\nPlease be there on time! We're excited to help you excel.",
        "date": "07-09-2023",
        "id": "20",
        "subject": "Demo Session TODAY! Don't Miss Out!"
      },
      {
        "body": "Dear Student,You were informed regarding an event: “Amazon ML Summer School India”. The deadline for it's registration has already closed. Now, in order to get your candidature considered for this event and to receive further updates related to this event, you MUST submit the registration confirmation for this event on the LINK immediately : https://bit.ly/EventRegConfirmationNOTE: YOU HAVE TO UPLOAD THE PDF OF REGISTRATION CONFIRMATION EMAIL RECEIVED ON YOUR REGISTERED EMAIL ID.",
        "date": "08-09-2023",
        "id": "16",
        "subject": "Important Regarding Registration: Amazon ML Summer School India"
      },
      {
        "body": "Dear student,A mock test to apprise the students about the MyClass platform for the conduct\r\nof the CA Test of PEA course has been scheduled on 10 September, 2023 (Sunday) at 06:00 PM. Kindly check the same in your seating plan \r\nand strictly adhere to the schedule of mock test as it is compulsory to attempt the mock test.",
        "date": "07-09-2023",
        "id": "19",
        "subject": "Mock test"
      },
      {
        "body": "Dear Student, Deadline to complete LEVEL 1 of HITBULLSEYE AND MYPERFECTICE is 15th September.\n\nMake sure to complete it before the deadline hits.\n\nIf Completed than kindly attempt the next Level.",
        "date": "09-09-2023",
        "id": "5",
        "subject": "Deadline to complete LEVEL 1 of HITBULLSEYE AND MYPERFECTICE"
      },
      {
        "body": "Dear Student, Deadline to complete LEVEL 1 of HITBULLSEYE AND MYPERFECTICE is 15th September.\n\nMake sure to complete it before the deadline hits.\n\nIf Completed than kindly attempt the next Level.",
        "date": "09-09-2023",
        "id": "6",
        "subject": "Deadline to complete LEVEL 1 of HITBULLSEYE AND MYPERFECTICE"
      },
      {
        "body": "Dear Student, Housekeeping of your room is scheduled for today. After Completion of work, kindly submit the rating for the quality of work done by the housekeeping staff on the following link:",
        "date": "08-09-2023",
        "id": "8",
        "subject": "Room Cleaning"
      },
      {
        "body": "Register Now:http://tfugjalandhar.dev/Date:11th September 2023 (Monday)Time:11:00 am - 5:00 pmFood & Beverages will be providedSwagsDuty Leavewill be providedDiscover the fascinating world ofKerasand machine learning at this exclusive event!Experience a day filled with knowledge, networking, and fun:\nEngaging SessionsExpert SpeakersHands-on WorkshopsThis is your chance to connect with theglobal ML communityand get closer toKeras.Don't miss out!We are looking forward to seeing you all there at the event.For any queries,Feel free to reach out to us at:tfug.jalandhar@gmail.comorteam@tfugjalandhar.devFollow us:https://beacons.ai/tfug.jalandharStay Connected with us for the upcoming events!",
        "date": "09-09-2023",
        "id": "4",
        "subject": "Register Now for Keras Community Day Jalandhar 2023"
      },
      {
        "body": "Dear Student, Your are at level 1 of Myperfectice platform. This is to inform you that last date to complete level 1 is 15 Sep. You are required to adhere the given deadlines else it will affect your placement ranking as well as eligibility in future placement drives",
        "date": "08-09-2023",
        "id": "11",
        "subject": "Deadline to complete Practice Platform Level"
      },
      {
        "body": "Dear Student, Your are at level 1 of Hitbullseye platform. This is to inform you that last date to complete level 1 is 15 Sep. You are required to adhere the given deadlines else it will affect your placement ranking as well as eligibility in future placement drives",
        "date": "08-09-2023",
        "id": "12",
        "subject": "Deadline to complete Practice Platform Level"
      },
      {
        "body": "Dear Student,The zero lecture presentation for all the registered courses\r\nof current term is available on LPU Live for reference. You are advised to go through the presentations of all the courses as this shall \r\nmake you aware of important course related information like course outcomes, program outcomes, course content (unit wise), \r\nMOOC's/certifications/hackathons, blended learning, cohort mapping etc. In case the zero lectures presentation of any of the courses\r\nis not available, kindly contact the concerned course teacher.",
        "date": "07-09-2023",
        "id": "17",
        "subject": "Zero lecture presentation"
      },
      {
        "body": "Dear Student, You eligible for the competitive event of KPIT SPARKLE. For that you need to complete the registration on Link 1: https://sparkle.kpit.com/followed by submitting your cadidature onLink 2:https://bit.ly/EventRegConfirmationDeadline September 11,2023 - 11:00 AM",
        "date": "10-09-2023",
        "id": "1",
        "subject": "Important Details of KPIT SPARKLE"
      },
      {
        "body": "Dear Students, \n\nRegistrations are invited for the 2nd batch of Skill Development Certification course on Advanced Excel, Tableau and Power BI: A Tool Pack for Data Analysis.\n\nCourse Details:  https://tinyurl.com/Tableau-PowerBI-Excel\n\nThis is 40 hours online course with Live classes and video recording  (40 days @ 1Hour/ day from 6-7pm, Monday- Saturday).  Classes starting from 4th Oct 2023.\n\nThe course fee is Rs. 1550 only (initial registration can be done with Rs. 155 only).\n\nFor further details write to Harpreet.15604@lpu.co.in",
        "date": "09-09-2023",
        "id": "7",
        "subject": "SDC on Advanced Excel, Tableau and Power BI"
      },
      {
        "body": "Dear student, attend a free GRE/GMAT demo class to know why bluehawks GRE/GMAT prep covered by score guarantee is the best of all. All students who attend the free demo class shall be eligible for a 10% extra discount. Register using this link: m.9m.io/jqzhlof",
        "date": "08-09-2023",
        "id": "9",
        "subject": "Free GRE/GMAT Demo class"
      },
      {
        "body": "Dear Student, You are eligible for COMPETETIVE EVENT of ADOBE. Date will be notified later. Check venue through UMS. Register by Sep 12 2023  1:00PM. BEST Wishes, LPU",
        "date": "08-09-2023",
        "id": "10",
        "subject": "COMPETETIVE EVENT - ADOBE"
      },
      {
        "body": "Dear Student, This is to inform you that you are eligible for the event ofKPIT SPARKLE.  You are advised to complete the registration of this event immediately on Link: https://sparkle.kpit.com/followed by sharing your registration confirmation on the link: https://bit.ly/EventRegConfirmation, to receive the further updates regarding this event, time to time.",
        "date": "09-09-2023",
        "id": "3",
        "subject": "Important Regarding KPIT - SPARKLE"
      },
      {
        "body": "Dear student, bluehawks brings in the opportunity for students with excellent English communication skills to get internships at top companies like Apple, Deloitte, Flipkart, Uber and many more irrespective of their year of study ( any student with excellent English skills can apply). All selected students shall undergo a free training under supervision of industry experts and shall get internship opportunities upon completion of the free training. Visit bluehawks support center at 4th floor, Block 15 A, Unicenter for applying.",
        "date": "08-09-2023",
        "id": "13",
        "subject": "If you are great at  English communication, this opportunity is for you."
      },
      {
        "body": "Dear student, get free assistance on top national and international scholarships based on your score in exams such as GRE, GMAT, IELTS, TOEFL, PTE. Visit bluehawks support center at 4th Floor, Block 15 A, Unicenter along with your scorecard of any of the competitive exam, identity proof and academic docs to plan your study abroad journey.",
        "date": "08-09-2023",
        "id": "14",
        "subject": "Get assistance on study abroad scholarships"
      },
      {
        "body": "Dear Student, This is to inform you that you are eligible for the event ofKPIT SPARKLE.  You are advised to complete the registration of this event immediately on Link: https://sparkle.kpit.com/followed by sharing your registration confirmation on the link: https://bit.ly/EventRegConfirmation, to receive the further updates regarding this event, time to time.",
        "date": "08-09-2023",
        "id": "15",
        "subject": "Important Regarding KPIT - SPARKLE"
      },
      {
        "body": "Dear student,This is for your information that your First CA Test for PEA306 \r\ncourse is scheduled on 17 Sept, 2023 (Sunday) from 10:00 AM to 10:50 AM. In this regard kindly note certain important points as mentioned\r\nbelow:1. The CA Test shall consist of Multiple-Choice Questions (MCQs).2. Test shall be conducted online on MyClass Platform\r\nand login through MyClass tab in your UMS dashboard or use the URL:  myclass.lpu.in , the schedule shall be available to you in your\r\n\"Exam Seating Plan\" tab. UMS path for seating plan: UMS Navigation---->Examination System---->Exam Seating PlanKindly refer to \r\nthe guidelines in seating plan and strictly adhere to it. The user name for the test is your registration number and password for the\r\ntest is same as that of the UMS credentials.3. CA test shall not be rescheduled under any circumstances.4. Do not try to leave the test window during the exam. The students are not allowed to navigate away from the exam window. The change in \r\ntab, browser or window may lead to the termination of the CA test with auto submission. No further chance to reappear in the CA test \r\nshall be given in all such cases.5. As this test is fully under surveillance and every activity of student will be on record \r\nand analysed by a proctor, hence strict action will be taken against the student if found using any unfair means and seeking help \r\nfrom other people/cheating during examination.6. The duration of the Test shall be Fifty minutes (50 minutes) (max. 3 minutes \r\nper question).7. Test entry will be block after 15 minutes from the start of exam time. So, you are requested to login 30 minutes\r\nprior of scheduled time.8. Test shall comprise of 30 multiple choice questions divided per Unit as:a. 15 questions from\r\nUnit 1 of the syllabus.b. 15 questions from Unit 2 of the syllabus.9. All questions shall be compulsory.10. Each\r\nquestion shall be of 1 mark and there shall be a negative marking of 0.25 marks for each wrong answer given by the student.11.\r\nIn case of any issues/challenges, please contact 01824-520150 or email at: support.myclasses@lpu.co.in",
        "date": "07-09-2023",
        "id": "18",
        "subject": "CA Test for PEA306 course"
      },
      {
        "body": "Dear Students,India’s biggest idea competition is open to college and postgraduate students across India and Tata employees worldwide. Your idea can be about anything, and you can be from any stream — literature, design, science, technology, medicine, economics, business or anything else. All that matters is how your idea makes life a little bit better, happier, easier.To know more about how to refine your idea and fine-tune it, download the Idea Guidebook: https://unstop.com/api/competition/get-attachment/64ef9d6b2e047_Idea_Guidebook_Unstop.pdfFollow the step-by-step process to turn your idea into a pitch-ready concept.Prizes :- Grand Finale Winners: Rs.26,00,000 (Rs.2,00,000each to 13 Grand Finale Winners)- Accelerated entry into TAS.\nKnow about TAS at https://www.tata.com/careers/programs/tas- Popular Choice Awards: The ideas that get the most votes receive prizes. This is independent of the jury assessments\nReferral Rewards:  Rs.1,00,000 Spread the word about the Tata Imagination Challenge to your friends, colleagues, and anyone you know who has a flair for thinking outside the box. Encourage them to participate and be a part of this exciting journey. company is offering an array of incredible rewards that truly reflect your commitment to innovation.- Top 5 Referrers: INR 10K each- Next 5 Referrers: INR 5K each- Next 10 Referrers: INR 2.5K each\n(In the form of Tata Brand Vouchers)- Participation Certificate will be provided to all the candidates who take the quiz round and simulation round.- Certificate of appreciation for participants of Round 3- Tata brand vouchers for winners of Tata Tales on Unstop’s Instagram pageImp Links:- Idea Guidebook: https://unstop.com/api/competition/get-attachment/64ef9d6b2e047_Idea_Guidebook_Unstop.pdf- TAS PPI Eligibility Guidebook: https://unstop.com/api/competition/get-attachment/64f05d73f39ca_64ef213526504_TAS_PPI_Guidelines.pdfRegistration Links:- Link1: https://unstop.com/competitions/750864/register- Link2: https://bit.ly/EventRegConfirmationRegistration Deadline: Immediate BasisNOTE: IN ORDER TO GET YOUR CANDIDATURE CONSIDERED FOR THIS IDEATION CHALLENGE, YOU MUST COMPLETE REGISTRATION ON LINK1 & LINK2 AS WELL!",
        "date": "09-09-2023",
        "id": "2",
        "subject": "Tata Imagination Challenge 2023"
      }
    ],
    "datetime": 1694350467.764532
  }

  return (
    <div className="px-4 lg:absolute left-72 sm:px-6 md:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Announcements</h1>
      <div className="space-y-4">
        {data.data.map((ann) => (
          <Announcement key={ann.id} announcement={ann} />
        ))}
      </div>
    </div>
  );
};

export default Announcemnets;