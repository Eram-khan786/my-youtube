import React from "react";

const CommentData = [
  {
    name: "Eram",
    text: "I am creating a comment box",
    replies: [],
  },
  {
    name: "Eram",
    text: "I am creating a comment box",
    replies: [
      {
        name: "Eram",
        text: "I am creating a comment box",
        replies: [],
      },
      {
        name: "Eram",
        text: "I am creating a comment box",
        replies: [
          {
            name: "Eram",
            text: "I am creating a comment box",
            replies: [
              {
                name: "Eram",
                text: "I am creating a comment box",
                replies: [
                  {
                    name: "Eram",
                    text: "I am creating a comment box",
                    replies: [
                      {
                        name: "Eram",
                        text: "I am creating a comment box",
                        replies: [
                          {
                            name: "Eram",
                            text: "I am creating a comment box",
                            replies: [
                              {
                                name: "Eram",
                                text: "I am creating a comment box",
                                replies: [
                                  {
                                    name: "Eram",
                                    text: "I am creating a comment box",
                                    replies: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Eram",
            text: "I am creating a comment box",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Eram",
    text: "I am creating a comment box",
    replies: [],
  },
  {
    name: "Eram",
    text: "I am creating a comment box",
    replies: [],
  },
  {
    name: "Eram",
    text: "I am creating a comment box",
    replies: [],
  },
  {
    name: "Eram",
    text: "I am creating a comment box",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mx-5 bg-gray-100 rounded-lg my-3">
      <div>
        <img
          className="w-12 h-12"
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt="User avtar"
        />
      </div>
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const ContainerList = ({ comments }) => {
  return comments.map((ele, index) => (
    <div>
      <Comment key={index} data={ele} />
      <div className="pl-5 border border-l-black ml-5">
        {/* <Comment key={index} data={ele} /> */}
        <ContainerList comments={ele.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="w-[900px]">
      <div className="p-5 text-2xl font-bold">Comments:</div>
      <ContainerList comments={CommentData} />
    </div>
  );
};

export default CommentsContainer;
