import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const UpdatePassword = () => {
    const { register, handleSubmit, watch } = useForm();
    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const newPassword = watch("newPassword");
    const confirmPassword = watch("confirmPassword");

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleTogglePasswordVisibility = (field) => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const formFields = [
        { name: "oldPassword", label: "Old Password" },
        { name: "newPassword", label: "New Password" },
        {
            name: "confirmPassword", label: "Confirm Password", error: confirmPassword &&
                confirmPassword !== newPassword, errorMessage: 'Passwords do not match'
        },
    ];

    return (
        <section className="flex bg-slate-50 p-4 py-10 rounded-lg">
            <form className="flex flex-col justify-center items-center space-y-5 w-full" onSubmit={handleSubmit(onSubmit)}>
                {formFields.map((field) => (
                    <TextField
                        key={field.name}
                        className='max-w-96'
                        fullWidth
                        label={field.label}
                        {...register(field.name)}
                        type={showPassword[field.name] ? 'text' : 'password'}
                        error={Boolean(field.error)}
                        helperText={field.error && field.errorMessage}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => handleTogglePasswordVisibility(field.name)}
                                        edge="end"
                                    >
                                        {showPassword[field.name] ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                ))}

                <div className="mt-5 flex justify-center w-full">
                    <Button
                    className='max-w-96'
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="success"
                        size="large"
                        disabled={Boolean(confirmPassword && confirmPassword !== newPassword)}
                    >
                        Update Password
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default UpdatePassword;
