import { createUseStyles } from 'react-jss'

export const stylesPopup = createUseStyles({
    row: {
        alignItems: 'flex-start',
        display: 'flex',
        width: "100%",
        justifyContent: "center",
        "& .label": {
            color: "#0095FF",
            fontSize: "12px"
        }

    },
    colInput: {
        marginTop: "16.89px",
        display: 'flex',
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        "& .DGN-UI-Dropdown-Form": {
            minHeight: "30px"
        }
    },
    rowInput: {
        alignItems: 'center',
        marginTop: "18.89px",
        display: 'flex',
        width: "100%",
        justifyContent: "space-between",
    },
    form: {
        overflow: "auto",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    }

})

export const stylesIndex = createUseStyles({
    main: {
        "& svg": {
            cursor: "pointer"
        },
        "& .dx-header-row": {
            backgroundColor: "#F6F6F9",
            height: "40px"
        },
        "& .dx-data-row ": {
            height: "40px"
        },
        "& .dx-page": {
            visibility: "hidden",

        },
        "& .dx-pager": {
            display: "none"
        }

    },
    Datagrid: {
        // width: "1784px",
        margin: "64px 40px"
    },
    modal: {
        width: "696px", height: "914px"
    },
    btnAdd: {
        marginLeft: "17.83px", height: "70px", width: "89px"
    },
    PagingInfo: {
        marginTop: "28.82px"
    }
})
