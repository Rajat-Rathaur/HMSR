
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Button,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Skeleton
} from "@mui/material";
import PortalPopup from "../components/PortalPopup";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useFetchData from "../hooks/useFetchData";
import { useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";
import { useCallback, useState } from 'react';
import Popup from '../components/popups/Popup';
import postData from '../utilities/postData';
import { useSnackbar } from '../hooks/useSnackbar';

const UpdateDetails = () => {

    const { data: hostelite, isLoading } = useFetchData(
        '/api/hostelite/getHostelite');
    const { handleSnackbarOpen } = useSnackbar();


    const isSmallScreen = useMediaQuery('(max-width:465px)');

    const [isEditDetailsPopupOpen, setEditDetailsPopupOpen] = useState(false);

    const openEditDetailsPopup = useCallback(() => {
        setEditDetailsPopupOpen(true);
    }, []);

    const closeEditDetailsPopup = useCallback(() => {
        setEditDetailsPopupOpen(false);
    }, []);

    const { control, handleSubmit } = useForm();
    const [formData, setFormData] = useState();

    const onSubmit = (formData) => {
        setFormData(formData)
        openEditDetailsPopup();
    };

    const handleFormSubmit = async () => {
        const result = await postData("/api/hostelite/updateHostelite", { ...formData, dob: formData.dob['$d'] });
        if (result.success) {
            handleSnackbarOpen('Hostelite updated Successfully', 'success');
            closeEditDetailsPopup()
        } else {
            handleSnackbarOpen('Error while updating the Hostelite.', 'error');
        }
    }

    const contactDetails = [
        { name: "phone_no", label: "Phone Number", type: "number", defaultValue: 'phone_no' },
        { name: "email_id", label: "Email", type: "email", defaultValue: 'email_id' },
    ];

    const addressFields = [
        { name: "street", label: "Street", type: "text", defaultValue: 'hostelite_street' },
        { name: "city", label: "City", type: "text", defaultValue: 'hostelite_city' },
        { name: "state", label: "State", type: "text", defaultValue: 'hostelite_state' },
        { name: "pincode", label: "Pincode", type: "number", defaultValue: 'hostelite_pincode' },
    ];

    const guardianFields = [
        { name: "h_dependents_name", label: "Guardian Name", type: "text", defaultValue: 'h_dependents_name' },
        { name: "h_dependents_phone_no", label: "Guardian Phone Number", type: "number", defaultValue: 'h_dependents_phone_no' },
        { name: "h_dependents_relationship", label: "Relation", type: "text", defaultValue: 'h_dependents_relationship' },
    ];


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-x-5">
                <div className="flex flex-col space-y-5">
                    <h2 className="hd-s">Personal Details</h2>
                    {isLoading ? (
                        <>
                            <Skeleton variant="rectangular" width='60%' height={50} />
                            <Skeleton variant="rectangular" width='60%' height={50} />
                            <Skeleton variant="rectangular" width='60%' height={50} />
                        </>
                    ) : (
                        <>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue={hostelite.hostelite_name}
                                render={({ field }) => (
                                    <TextField
                                        required
                                        label="Name"
                                        variant="outlined"
                                        type="text"
                                        {...field}
                                        className="sm:max-w-80 w-full"
                                        size={isSmallScreen ? 'small' : "medium"}
                                    />
                                )}
                            />

                            <LocalizationProvider dateAdapter={AdapterDayjs}  >
                                <Controller
                                    name="dob"
                                    control={control}
                                    rules={{ required: true }}
                                    defaultValue={dayjs(hostelite.dob)}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            className="sm:max-w-80 w-full"
                                            slotProps={{ textField: { size: isSmallScreen ? 'small' : "medium" } }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>

                            <FormControl required className="sm:max-w-80 w-full" variant="outlined" size={isSmallScreen ? 'small' : "medium"}>
                                <InputLabel>Gender</InputLabel>
                                <Controller
                                    name="gender"
                                    control={control}
                                    defaultValue={hostelite.gender}
                                    render={({ field }) => (
                                        <Select label="Gender" {...field}>
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                            <MenuItem value="Others">Others</MenuItem>
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </>
                    )}

                    <h2 className="hd-s mt-3">Contact Details</h2>
                    {isLoading ? (
                        <>
                            {contactDetails.map((detail) => (
                                <Skeleton key={`skeleton_${detail.name}`} variant="rectangular" width='60%' height={50}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            {contactDetails.map((detail) => (
                                <Controller
                                    key={detail.name}
                                    name={detail.name}
                                    control={control}
                                    defaultValue={hostelite[detail.defaultValue]}
                                    render={({ field }) => (
                                        <TextField
                                            required
                                            key={detail.name}
                                            label={detail.label}
                                            {...field}
                                            type={detail.type}
                                            className="sm:max-w-80 w-full"
                                            size={isSmallScreen ? 'small' : "medium"}
                                            sx={{
                                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                                    display: "none",
                                                },
                                                "& input[type=number]": {
                                                    MozAppearance: "textfield",
                                                },
                                            }}
                                            InputProps={{
                                                inputProps: { min: 0 }
                                            }}
                                        />
                                    )}
                                />
                            ))}
                        </>
                    )}

                    <h2 className="hd-s mt-3">Work Details</h2>
                    {isLoading ? (
                        <Skeleton variant="rectangular" width='60%' height={50} />

                    ) : (
                        <Controller
                            name="work"
                            control={control}
                            defaultValue={hostelite.work}
                            render={({ field }) => (
                                <TextField
                                    required
                                    label="Profession"
                                    variant="outlined"
                                    type="text"
                                    {...field}
                                    className="sm:max-w-80 w-full"
                                    size={isSmallScreen ? 'small' : "medium"}
                                />
                            )}
                        />
                    )}


                </div>

                <div className="flex flex-col space-y-5">
                    <h2 className="hd-s">Address Details</h2>
                    {isLoading ? (
                        <>
                            {addressFields.map((field) => (
                                <Skeleton key={`skeleton_${field.name}`} variant="rectangular" width='60%' height={50} />
                            ))}
                        </>
                    ) : (
                        <>
                            {addressFields.map((detail) => (
                                <Controller
                                    key={`controller_${detail.name}`}
                                    name={detail.name}
                                    control={control}
                                    defaultValue={hostelite[detail.defaultValue]}
                                    render={({ field }) => (
                                        <TextField
                                            required
                                            key={`textfield_${field.name}`}
                                            label={detail.label}
                                            variant="outlined"
                                            {...field}
                                            type={detail.type}
                                            className="sm:max-w-80 w-full"
                                            size={isSmallScreen ? 'small' : "medium"}
                                            sx={{
                                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                                    display: "none",
                                                },
                                                "& input[type=number]": {
                                                    MozAppearance: "textfield",
                                                },
                                            }}
                                            InputProps={{
                                                inputProps: { min: 0 }
                                            }}
                                        />
                                    )}
                                />
                            ))}
                        </>
                    )}


                    <h2 className="hd-s mt-3">Guardian Details</h2>
                    {isLoading ? (
                        <>
                            {guardianFields.map((field) => (
                                <Skeleton key={`skeleton_${field.name}`} variant="rectangular" width='60%' height={50} />
                            ))}
                        </>
                    ) : (
                        <>
                            {guardianFields.map((detail) => (
                                <Controller
                                    key={`controller_${detail.name}`}
                                    name={detail.name}
                                    control={control}
                                    defaultValue={hostelite[detail.defaultValue]}
                                    render={({ field }) => (
                                        <TextField
                                            required
                                            key={`textfield_${field.name}`}
                                            label={detail.label}
                                            variant="outlined"
                                            {...field}
                                            type={detail.type}
                                            className="sm:max-w-80 w-full"
                                            size={isSmallScreen ? 'small' : "medium"}
                                            sx={{
                                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                                    display: "none",
                                                },
                                                "& input[type=number]": {
                                                    MozAppearance: "textfield",
                                                },
                                            }}
                                            InputProps={{
                                                inputProps: { min: 0 }
                                            }}
                                        />
                                    )}
                                />
                            ))}
                        </>
                    )}
                </div>

                <div className="col-span-full flex justify-center items-center mt-5 sm:mt-10 ">
                    <Button
                        className="w-full sm:w-96"
                        color="success"
                        variant="contained"
                        size="large"
                        type="submit"
                    >
                        Update Details
                    </Button>
                </div>
            </form>

            {isEditDetailsPopupOpen && (
                <PortalPopup
                    overlayColor="rgba(0, 0, 0, 0.7)"
                    placement="Centered"
                    onOutsideClick={closeEditDetailsPopup}
                >
                    <Popup
                        heading="Confirm changes"
                        subText="Please confirm the changes you made. Once confirmed, they cannot be undone."
                        icon="/icons/edit.svg"
                        onClose={closeEditDetailsPopup}
                        onConfirm={handleFormSubmit}
                    />
                </PortalPopup>
            )}
        </>
    )
}

export default UpdateDetails