import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
export const SidebarData = [{
        title: 'Statistique du test ',
        path: '/StatiqTest',
        icon: < PieChartRoundedIcon / > ,
        cName: 'nav-text'
    },
    {
        title: 'Ajouter patient',
        path: '/addPatient',
        icon: < GroupAddOutlinedIcon / > ,
        cName: 'nav-text'
    },
    {
        title: 'Listes des patient',
        path: '/listePatient',
        icon: < PeopleAltRoundedIcon / > ,
        cName: 'nav-text'
    },
    {
        title: 'Ajouter admin',
        path: '/addAdmin',
        icon: < PersonAddRoundedIcon / > ,
        cName: 'nav-text'
    }


];