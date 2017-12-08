import React from 'react';
import 'prismjs';
import { PrismCode } from 'react-prism';
import Comment from './Comment';
import '../../stylesheets/components/comment.css';
import {
    ContentComponent,
    ComponentContentText,
    ComponentUsed }
    from '../common/ComponentContent';
import {
    ComponentsTabs,
    TabPanel }
    from '../common/ComponentsTabs';

function CommentComponent() {
    return (
        <div className="isComponent">
            <div className="onComponent">
                <Comment
                    type="Author"
                    author="Sandip Pal"
                    avatar={<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Author" />}
                    date="24 December, 2017"
                    target="https://www.google.co.in/"
                    content={
                        <p>Use the Avatar component to represent users with their profile picture.
                Optionally, a presence to indicate online status can also be displayed.
                        </p>
                    }
                />
                <Comment
                    type="Author"
                    author="Sandip Pal"
                    avatar={<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Author" />}
                    date="24 December, 2017"
                    target="https://www.google.co.in/"
                    content={
                        <p>Use the Avatar component to represent users with their profile picture.
                Optionally, a presence to indicate online status can also be displayed.
                        </p>
                    }
                />
            </div>
            <ContentComponent>
                <ComponentContentText>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using Content here, content here.
                </ComponentContentText>
                <ComponentUsed title="Uses Component">
                    <PrismCode component="pre" className="language-javascript">
                        {`<Comment
                    type="Author"
                    author="Sandip Pal"
                    avatar={<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Author" />}
                    date="24 December, 2017"
                    target="https://www.google.co.in/"
                    content={
                        <p>Use the Avatar component to represent users with their profile picture.
                Optionally, a presence to indicate online status can also be displayed.
                        </p>
                    }
                />
                <Comment
                    type="Author"
                    author="Sandip Pal"
                    avatar={<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Author" />}
                    date="24 December, 2017"
                    target="https://www.google.co.in/"
                    content={
                        <p>Use the Avatar component to represent users with their profile picture.
                Optionally, a presence to indicate online status can also be displayed.
                        </p>
                    }
                />`}
                    </PrismCode>
                </ComponentUsed>
            </ContentComponent>
        </div>
    );
}

export default CommentComponent;
