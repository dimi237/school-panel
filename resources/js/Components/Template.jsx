import QRCode from "react-qr-code";

const styles = {
    page: {
        margin: '10px',
        color: 'black',
        backgroundSize: 'cover',
        width: '3508px',
        height: '2480px',
        background: "url('/images/cert1.jpeg') no-repeat",
    },
    generic: {
        position: 'absolute',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'black',
        marginTop: '20px',
        marginLeft: '20px',
    },
    id: {
        left: '34.2rem',
        top: '19rem',
    },
    name: {
        left: '11rem',
        top: '28rem',

    },
    birthdate: {
        left: '46rem',
        top: '28rem',

    },
    birthplace: {
        left: '61rem',
        top: '28rem',

    },
    certificate: {
        left: '11rem',
        top: '32rem',

    },
    certifdate: {
        left: '50rem',
        top: '32rem',
    },

    speciality: {
        left: '11rem',
        top: '39.7rem',

    },
};

const styles2 = {
    page: {
        margin: '10px',
        color: 'black',
        backgroundSize: 'cover',
        width: '3508px',
        height: '2480px',
        background: "url('/images/cert2.png') no-repeat",
    },
    generic: {
        position: 'absolute',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'black',
        marginTop: '20px',
        marginLeft: '20px',
    },
    name: {
        left: '25rem',
        top: '19.5rem',

    },
    qrcode: {
        left: '40rem',
        top: '29rem',
    }

};

const styles3 = {
    page: {
        margin: '10px',
        color: 'black',
        backgroundSize: 'contain',
        width: '1792px',
        height: '2560px',
        background: "url('/images/badge.jpeg') no-repeat",
    },
    generic: {
        position: 'absolute',
        fontSize: '10rem',
        fontWeight: 'bold',
        color: '#888',
        marginTop: '20px',
        marginLeft: '20px',
    },
    name: {
        left: '33rem',
        top: '55rem',

    },
    roleTag: {
        left: '33rem',
        top: '70rem',
        fontSize: '8rem',
        fontStyle: 'italic',
        color: 'black',

    },
    role: {
        left: '33rem',
        top: '80rem',


    }

};

export const Cert1Template = ({data}) => {
    // const data = {
    //     id: 122,
    //     name: 'John Doe',
    //     birthdate: '1990-01-01',
    //     birthplace: 'New York',
    //     certificate: 'Attestation Certificate',
    //     certifdate: '2015-05-01',
    //     speciality: 'Specialist 1',
    //     // role: 'Role 1',
    //     // certificate_id: 12345,
    //     // badge_id: 67890,
    // };
    return (
        <>
            <div style={styles.page} className="page">
                {data ? Object.keys(data).map((key) =>
                    <h1 style={{ ...styles.generic, ...styles[key] }}>{data[key]}</h1>
                ):<></> }
            </div>
        </>
    );
};

export const Cert2Template = ({ id, data}) => {
    return (
        <>
            <div style={styles2.page} className="page">
                {Object.keys(data).map((key) =>
                    <h1 style={{ ...styles2.generic, ...styles2[key] }}>{data[key]}</h1>
                )}

                <div style={{ ...styles2.generic, ...styles2.qrcode }}>
                    <QRCode
                        size={200}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={route('details', id)}
                        viewBox={`0 0 256 256`}
                    />
                </div>
            </div>
        </>
    );
};

export const BadgeTemplate = ({ role, name }) => {
    return (
        <>
            <div style={styles3.page} className="page">
                <h1 style={{ ...styles3.generic, ...styles3.name }}>{name}</h1>
                <h1 style={{ ...styles3.generic, ...styles3.roleTag }}>Role</h1>
                <h1 style={{ ...styles3.generic, ...styles3.role }}>{role}</h1>
            </div>
        </>
    );
};

