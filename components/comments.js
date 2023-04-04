import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import WorkerServicePost from '../services/WorkerService';
import WorkerServiceGet from '../services/WorkerGet';
import { FlatList } from 'react-native-gesture-handler';
const CommentComponent = () => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const commentWorker = 'https://api-livre.bellatif6169.workers.dev/comments';
    const fetchComments = () => {
      const response = WorkerServiceGet.get('/comments').then((response) => {
                    console.log(response.data);
                    setComments(response.data);
                });
    }
    useEffect(() =>{

        //use workerservice.js to fetch comments with axios

       
                const response = WorkerServiceGet.get('/comments').then((response) => {
                    console.log(response.data);
                    setComments(response.data);
                });


    }, []);

    const handleSubmit = async  () => {

    fetch('https://api-livre.bellatif6169.workers.dev/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp; report-to="default";',
            'Cross-Origin-Opener-Policy': 'same-site; report-to="default";',
            'Cross-Origin-Resource-Policy': 'same-site',
            'X-Content-Type-Options': 'nosniff',

        },
        body: JSON.stringify({
            content: comment
        })
    }).then((response) => {

        setComments([...comments, comment]);
        setComment('');
    }).catch((error) => {
        console.error('Error fetching data from Cloudflare Workers API:', error);
    });}
    
       /* try {
                const response = await WorkerServicePost.post('/comments',JSON.stringify({
                                content: comment
                            }));
                            
                            setComments([...comments, comment]);
                            setComment('');
                } catch (error) {
                    console.error('Error fetching data from Cloudflare Workers API:', error);
                }
            };*/



//iterate on comments array and display them in a list (the format is id: "comment")


        return ( 
            <View style={styles.container}>
            <Text style={styles.heading}>Livre d'or</Text>
            <FlatList
                data={comments}
                keyExtractor={(k,v) => v}
                renderItem={({item}) => {
                    return <Text>anonyme: {item}</Text>
                }}
            />
            <Text style={styles.heading}>Add a comment</Text>
            <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your comment"
                        value={comment}
                        onChangeText={setComment} />
                    <Button style={styles.button} title="Submit" onPress={handleSubmit} />
                </View></View>
        );
    };


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#fff'
        },
        heading: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20
        },
        commentContainer: {
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10
        },
        username: {
            fontWeight: 'bold'
        },
        content: {
            marginTop: 5
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginBottom: 10
        },
        button: {
            backgroundColor: 'blue',
            color: '#fff',
            padding: 10
        }
    });
    export default CommentComponent;
