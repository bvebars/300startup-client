import React from "react";
import {Grid, Image} from "semantic-ui-react";

export const Products =() => {
    return (
        <div>
            <Grid container columns={4}>
                <Grid.Column>
                    <Image src='http://gidronmash-m.ru/imgtmp/orign_w/data/example.jpg' />
                    <h1>Загаловок</h1>
                    <p>Описание</p>
                    <button>Добавить в корзину</button>
                </Grid.Column>
                <Grid.Column>
                    <Image src='http://gidronmash-m.ru/imgtmp/orign_w/data/example.jpg' />
                    <h1>Загаловок</h1>
                    <p>Описание</p>
                    <button>Добавить в корзину</button>
                </Grid.Column>
                <Grid.Column>
                    <Image src='http://gidronmash-m.ru/imgtmp/orign_w/data/example.jpg' />
                    <h1>Загаловок</h1>
                    <p>Описание</p>
                    <button>Добавить в корзину</button>
                </Grid.Column>
                <Grid.Column>
                    <Image src='http://gidronmash-m.ru/imgtmp/orign_w/data/example.jpg' />
                    <h1>Загаловок</h1>
                    <p>Описание</p>
                    <button>Добавить в корзину</button>
                </Grid.Column>
            </Grid>
        </div>
    )
};

