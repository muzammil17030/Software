import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Students from './pages/Students.tsx'
import Teachers from './pages/Teachers.tsx';
import Subjects from './pages/Subjects.tsx';
import Classes from './pages/Classes.tsx';
import School from './pages/School.tsx'
import Sylabbus from './pages/Sylabbus.tsx'
import Fees from './pages/Fees.tsx'
import Admission from './pages/Admission.tsx'
import Exams from './pages/Exams.tsx'
import Sidebar from './components/Sidebar.tsx';
import Content from './components/Content.tsx';
import Footer from './components/Footer.tsx';
function Dashboard() {
    return (
 <Box>
        
        <Content children={undefined} ></Content>




  



        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Sidebar />} />
                <Route path="/Sidebar" element={<Sidebar />} />
                <Route path="/students" element={<Students />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/subjects" element={<Subjects />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/School" element={<School />} />
                <Route path="/Sylabbus" element={<Sylabbus />} />
                <Route path="/Fees" element={<Fees />} />
                <Route path="/Admission" element={<Admission />} />
                <Route path="/Exams" element={<Exams />} />
            </Routes>
        </BrowserRouter>












    
    <Footer></Footer>
    
        </Box>
    
    );
};

export default Dashboard;