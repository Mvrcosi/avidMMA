import React from 'react'
import { Avatar, Divider, Typography, Chip, Paper, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RoundAccordian from './RoundAccordian';



const FightCard = () => {



    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: "100%",
                    height: "100%",
                },
            }}
        >
            <Paper elevation={20} sx={{ display: 'flex', justifyContent: 'space-evenly' }} >

                <Paper elevation={5} sx={{ m: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ mt: 1 }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFRUXFhcXFhcXGBcYFRcYFRUXFxUXGBcYHSggGBomHRYVITEhJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGxAQGS0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLf/AABEIAL8BCAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xAA9EAACAQIDBAcGBQIFBQAAAAAAAQIDEQQhMQUSQVEGYXGBkaHwBxMiMrHRI0JSweEUkmJyorLxFTM1gtL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAQACAQQCAwEAAAAAAAAAAQIDESEEEjFBEzIiUXFC/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADH2hjqdCnKrVnGEIq8pSdkjgHtG9ptbFuVDD3pYfR8J1Fzk+Ef8PiE9Om9Kfaps/BtwUpV6qdnClZpNa3m/hXdc0DH+3LFy/7GFpQXBzcpvLXJWRyqEOZJYegpJ3vz/iw7TMtyXtm2re7jh7cvdy+u+T+yfbpLeSxWESX6qUs+3dl9zn0MJldK/wDNs/oWMRgWld592WtsvqQt7X0l0d6aYHGpe4rLef5J/BPs3Xr3XNhPjypRlTe9BtNO+XDk0zp/s/8Aa5Onahjm5wyUaus4/wCf9a69cuJKtjugLODxUKsI1KcozhJXjKLumupl4KgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQHTvaTw+AxFRO0txxg+O9P4Vbrzv3Ach9pnSmpja0qVNv3FOVopaTayc3z425I0GWDfJ9pIQqWytc2PY2xFUScvIrrUjfHHdeI0mhh3fTuJHZtNt8et9XJHSMP0GoyWd/EuYroS4L8NqStazyb7zP8AJK2/BY1jBYWMrOLTyfUnd6dfHwKKmFi08rrRc758e9G27K6NVbpy+BLg1nbTTQmK/RmO67Pl4r/kn39J/F247isE7tW19PR9ZD4zBuOfidX2r0etfK63fo/santTZcorPg7d2hWcndRvh6ie9jXS6VGssJVl+FVfwNvKE7ZW6pZLtsd3Pk2jSlTkmsmmmupp3TR9P9Gto/1GFo1uM6cW+21peaZvHJqJMABUAAAAAAAAAAAAAAAAAAAAAAAAAAA0z2uf+On/AJ6f+7zNzNR9qFLewT6qlN/6vMJny4nhsH8WmjXfzN+2PSSin4kRsPZzq4jdS+GPxyu+G8m9dcmbHRpwi3eSSztcw5p/Tu9NZ35S2GdtCRp3tyIfB14p23k+xolaVeL4mWZY6dWVf3SxiK7XBvsLsq8eLI/F7XoRyc4J8nJXJqs6+2Nia0X9jTel1o+BstXauHf51fqzIzHbOjiPhjJSb0z5LSxGZZTkubnw59Wp3R3D2TVL7NpZ6Smv9V19Tj2Hwu5OUJcH/GXidt9nNHd2fQ0zTeV+Mnz4nZ9PN22UABmAAAAAAAAAAAAAAAAAAAAAAAAAAAQvTLDOpgq8Yq73G0uuOf7EzI5njMZ+NUVWbTc5rKTuvia3b9mXcU1v2tuHi/Jb5RnRiolRxNR5SjT15O8kl4u3eaftLGRVt6U5VJZJR1b4a6I3XY2xlHB7v5atWTuuMYSaivFfQtR6GUt7fvvSWjedu4z3rux0ceOpXL6OLrVKjhBTi1vNrel+XN5qxOdHOkFWNSEFOck2lZveSz56nS8LsClG7cYXl8zUI7zz4tLMxq2y6MJXhBJ6ZJK3OxG+uvDTjzZfNXOkeFnHDSqKTbUW7LjbU5XPC1MRVUVBKUnrJZvvlkjtWKtKiu/9ixgKNNrdtx4FJ8tNZ8OI7NWJjKd6KtTV5XVmrO27lo+03Po7tGPvKdRReTW8vJ+R0HFbJpz+ZuXUyz/02lDSEVZW0L6vXmM8Y8dWuedK6UoY1WTcalmuburfZnRMP0njgqNCjuKygkrt702vmaX5Vd8eZBdIsMvdU69r+5qxf/rJ2t5oowmE9641anxSqSTiv0wtkv3ZO96knSvFw41b7nVtn4yNanGpHSSvnquDXjcyCH6LU92h1b0rdisvqmTBtm9ztxcmZnVkAASoAAAAAAAAAAAAAAAAAAAAAAAAHI+mGzq6rVofD8Upzg7LSTbWevFHXDWum+CnKmqsIuW588V8zhdNuPWrd/cim53G/p9+3f8ArVti4xPAKDd50ZWfZKTkvrYu4XHby1NCpY2dLEVaa0ldWb1Sa5aNWJzZlRmXJ9Orh+43CE8jArSXvM2klm+/Qu4OSsrvI17pdsZV570arTsrJdXFNZp5mbo8SNt99H3UrtZWfVxuRuy8QnNqMk8r/T7mg1cDjbe594t29t6/Bd/I2joZsqGGbbqb0nG3Ddzzb5t5LUWIzrtt1WeRF43FWTzLuMqq2TNf2jU+Fkd9p+Fzb20YxwtOm2r1al2nxhHd/drwJLCUFKrQp072S8Lrd/c53tfHOrWp3WUEo26k7vLxO0dDtjqFONWUbNq6TvvZ8XfTLRdZvrPfUcmOWYmrWyUKShFRirJKyKwDZwgAAAAAAAAAAAAAAAAAAAAAAAAAAHjR6APnn2gqEMdWdNKNmsksk3m2vXPsWb0fxqlFZ9V/XeXPbBgXSxCq2tGV2rc7u9/qvSND2ZtVwau7Lwt9ynJnt08PJ1XTa+KluK132a8sjHpYus7KOHld6ym1GK7r3b+xDbP27GVs9Oy1+HI3CnTlKN4NZ2s2c18Xy7cWXyoliMZubv8AT0lLVzclZprguZH1HXXw+6s+cZpx87NF5UMXvu8l27ztxurdWRLYbDzSvKSeWuXqxOrPpp4v0iMPOe61L63WVjE2zi1CFuNl5lvb+O9zUt+pdxqW19puXY0l2Wf2Gc2sd7mYk+i2FVfHUoN/PP4na+Si3LLu8D6KhGyS5Kxwj2W0b46nJ2ypytdZZ5rj2aeB3hHX9PN3e69AAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGg+1zYM8Rh41KaTlTlmn+lpqTXk+6/A+esRD4t22aefDq8D6y27jaVKl+LKyk1GK/NJvJKK4s+ZOlOyXSxE915b0suWq8RbF5LZ4ROHxTg9bcfO+hsdPpNOMI2nne/YlLTyuafWjZvmsvXmUzq2y8yLmVOd3LoFTpfJQjZ3er58lpxfxPquW10tmotNv524u+kXfLuy8DnzqvmVuu2iPZF/zabDtXbU6qV3mv3IujJtpP1mjHw759dl2K/wBjPwmCcpRusr8teH1HjKv8t12f2JbMbpzrTitYqEs723dNMk1LTyOsER0XhShQhSp7qcIx3oqyabinmutMlyzOgACAAAAAAAAAAAAAAAAAAAAAAAAAFFWrGKvJpJcW7Ih8X0igsqS33z0j92RdSfK+ca18RM1JqKu2klq3oQG1OkiSaoref6n8vctWR1edSq71JX5L8q7EU1KCS7jDXLb+rr4/TSfs0zbtatKoqs5uU45pvRPqWi7iE6TwVStOcflk212Nm1bToXIOlh7xs+zwMZqui4n00DH7J3s42T48iMqbHq3eX2fWb1jMA07pFGHXM1nJY57w5taTh9h1JZ2y58OxmTS2DLj65G7oxq0LsXk0ThzGuYLZFnnm8idwOAtKLayuiSwGDu72JHE4e0cimtWtcYk+EziNpS/q1OjNxcYRjvLR2Wj4NG77J6SqVo1luS/Uvkf/AMnOdi4ayT46m3U6ClG4nLrvs1wYueq3hO+aPTTMLiq1D5HeP6ZZx7uXcTeD6Q0pWU/w5f4vl/u+9jozySuPfp9Z+PMTAPIyTV07rqPTRgAAAAAAAAAAAAAAAAA8lJLN5I1zaXSqMW40o77/AFP5e5avyI1qT5XxjW71I2Kc0ldtJLVvQgtodJYK6pLff6vyr7mtYvG1azvUk2uC0S7iqhuo59c39Ozj9JJ52rrYqVSV6snLkuC7FwL9KrBFUIx5F2OGi+Bl5rp/jPHS5CpHmUYiSsUzwkUrmLu8mPKOox62GurkDHDtNrtNknOWha/p4y4ZkJa5Vw1+BgVtnWNrr4CzuVf0F1oXjOtNWFMjD4C7J/8A6YZeFwCsOkobD4W2Vi/Wwja0J2ng4opqxXBXuUq0YeFwm7FEph6yRhNNFdPdbC3TMniomHUrx5eRILDRtco9yuQqJ0wsNtGdJ3pya6tYvtRP4HpTF5VYuL5rOPhqvMhasUuBiS7C2eTWVd8ON/Mb/h8bSn8k4y6k1fw1Mg5tOjfgXsDtutQeu9H9Mnddz1Rtnnl+XLv0dn610MGJszaEK8N+D6muMXyZlm7ks68UAAQAAAAAAbBr3S/anuqe5F/FP6EW9TtbObq9RFdJduObdOD+BP8Au6+wicJTuR8Hd3JPCyOPevdXqceJjPUZyw568OkKVUvRmmV8Ld0oxMuBjRZVKoTL0rfKrFz+Eio35GTUqXEUvp2ZjtPwppSdk7dXrkXfdxbT6n2ar7eZbk8lb1rn4o8pytbitHbhnr9S3Sva/SlGV1dZZPPR5ZPxRkbi09etTGqQ5WTz/j9i7h6qa60vDLTzRMitvbyVO3Dn/BbqfCm164fsXKlRWTys7Py9eJg+9u+/PsuvuKmM+VRNX5rTj4FNlw9afdlio0rrqt4Wy834nqnnrZ5/7svIjo7eVO55u/rwMWpB3yMmnn2ftw+pUyLF5V2hXvky82YSVi/GWRVPSmcbnkaKLh5KZB3XnuURO0YIlHVI/G5k1Mq1sHakqFVP8rdpLmn9jpVOaaTWaauu85JXjxN76F4/3lHcesPo9Dfh19OP1XH/ANRsQAOhxAAAAAAcx6T4z3mJnyi91dx0qvO0W+SZyGc96cpc5Sfi2Y898dOr0mf5Wr9JGfSZg0zJhI5Xos2EzIhMwIsvRqEdo6Z8ZIolK5i++KoSHZ0vxlwLcayTtnr4Wy8Mii+f0+hVKGd7dXbctFauuWfevXmUKGba0enV6/cKNrJcvo367ilPd07vDMvFbF2Ek730yz6tC1Tn8Ts7Wy7bRvfwsVU1eLVtY7v917/V+BYxNTRJXvZN6Zp/8eZZRXKdr55LNcrLJditbxLNO7s/Pgs0126FuvVTdrWT0a8EvAu0IO1l4Xy04crq5Vb6ZUviSz6+3Xh4HkOa9PK3krFMKieXHn9b9p7PLPNEogp26ssu7+X5FdN6dnr9i2ldXWgi1fPl6ZWrxdcvr69dZ6pWLOd/XUN4pVpGU5luTMWVUe9yI7W9quTMasyuczHqPIlDEqokuhOL3MTucJJ+JHVCxs2s4YilJcJrzyLYvWopyz3YsdfBTCV0mVHc8gAAH//Z" />
                    <Typography >
                        Khabib Numagamedov
                    </Typography>
                    <Typography variant='overline'>
                        29-0-0
                    </Typography>
                    <Paper elevation={0} sx={{ display: 'flex' }}>
                        <FavoriteBorderIcon />
                        <Typography> 0</Typography>
                    </Paper>
                </Paper>
                <Paper elevation={0} >
                    <Divider sx={{ mt: 3 }} >
                        <Chip label="HEAVYWEIGHT" sx={{ fontSize: '12px' }} />
                    </Divider>
                    <Divider sx={{ mt: 2 }} >
                        vs
                    </Divider>
                </Paper>
                <Paper elevation={5} sx={{ m: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ mt: 1 }} src="data:image/jpeg;base64,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" />
                    <Typography >
                        Khabib Numagamedov
                    </Typography>
                    <Typography variant='overline'>
                        29-0-0
                    </Typography>
                    <Paper elevation={0} sx={{ display: 'flex' }}>
                        <FavoriteBorderIcon />
                        <Typography> 0</Typography>
                    </Paper>
                </Paper>
            </Paper>
            <Box>
                <Paper sx={{ height: '40px', width: '50%', m: '0 auto' }}>
                    <RoundAccordian />
                </Paper>
            </Box>

        </Box >


    )
}

export default FightCard