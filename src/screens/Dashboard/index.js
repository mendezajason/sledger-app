import HeaderBar from "../../components/basic/Header";
import React, { useContext, useEffect, useState } from "react";
import { Dimensions } from 'react-native';
import { Box, Button } from 'native-base';
import tw from "twrnc";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { ThemeContext } from "../../utils/ThemeProvider";
import { color } from "react-native-reanimated";
import { useNavigation, useRoute } from "@react-navigation/native";

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Dashboard = ({ children, title, ...props }) => {
    const [isShow, setShow] = useState(false);
    const { isToggle, toggleThme } = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();
    const [topIndex, setTopIndex] = useState(-120);

    useEffect(() => {
        if (isToggle) {
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: 'white',
                    ...isShow ? { borderTopLeftRadius: 3 } : {},
                },
                drawerStyle: {
                    backgroundColor: '#3d3d3d',
                    width: 280,
                },
                sceneContainerStyle: {
                    backgroundColor: "#3d3d3d",
                    ...isShow ? { paddingTop: 90 } : { paddingTop: 0 },
                },
                headerTitleStyle: {
                    color: "black",
                    width: SCREENWIDTH - 130,
                    fontWeight: 'light',
                    textAlign: "center",
                },
                headerLeft: (props) => (
                    <Button style={tw.style("text-black bg-white ml-2")} onPress={() => { navigation.toggleDrawer() }}>
                        <Icon name="menu" size={20} style={tw.style("text-black")} />
                    </Button>
                )
            })
        } else {
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: '#200A4C',
                    ...isShow ? { borderTopLeftRadius: 3 } : {},
                },
                drawerStyle: {
                    backgroundColor: '#000',
                    width: 280,
                },
                sceneContainerStyle: {
                    backgroundColor: "#000",
                    ...isShow ? { paddingTop: 90 } : { paddingTop: 0 },
                },
                headerTitleStyle: {
                    color: "white",
                    width: SCREENWIDTH - 130,
                    fontWeight: 'light',
                    textAlign: "center",
                    ...isShow ? { borderTopLeftRadius: 30 } : {},
                },
                headerLeft: (props) => (
                    <Button style={tw.style("text-white bg-[#200a4c] ml-2")} onPress={() => { navigation.toggleDrawer() }}>
                        <Icon name="menu" size={20} style={tw.style("text-white")} />
                    </Button>)
            })
        }
    }, [isToggle, isShow])

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', (event) => {
            // do something
            if (event.data.state.history[event.data.state.history.length - 1]) {
                if (event.data.state.history[event.data.state.history.length - 1].type == "drawer") {
                    if (event.data.state.history[event.data.state.history.length - 1].status === 'open') {
                        setShow(true);
                        navigation.setOptions({
                            sceneContainerStyle: {
                                backgroundColor: "#3d3d3d",
                                paddingTop: 60,
                            },
                        })
                    } else {
                        setShow(false);
                    }
                } else {
                    setShow(false);
                }
            } else {
                setShow(false);
            }
        });
    }, [])

    useEffect(() => {
        if (route.name == "Home" ||
            route.name == "Portfolio" ||
            route.name == "Trans" ||
            route.name == "New" ||
            route.name == "Portfolio" ||
            route.name == "Trade" ||
            route.name == "Settings") {
            setTopIndex(-67);
        } else {
            setTopIndex(-120);
        }
    }, [children]);

    return (
        <Box minH={SCREENHEIGHT} minW={SCREENWIDTH} style={tw.style(`bg-white dark:bg-[#200A4c]`)}  >
            {isShow && <Button
                style={tw.style('text-white rounded-full bg-[#7d7d7d]')}
                onPress={() => {
                    navigation.toggleDrawer()
                }}
                position="static"
                top={topIndex}
                size={9}
                left={20}
            >
                <Icon name="close" size={20} style={tw.style("text-gray-100")} />
            </Button>}
            {children}
        </Box>
    )
}
export default Dashboard;