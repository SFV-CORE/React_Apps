import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableWithoutFeedback} from 'react-native';
import {
  Container,
  Tipo,
  IconView,
  TipoText,
  ValorText,
  ValorView,
} from './style';

export default function HistoricoList({data, deleteItem}) {
  return (
    <TouchableWithoutFeedback onLongPress={() => deleteItem(data)}>
      <Container>
        <Tipo>
          <IconView tipo={data.tipo}>
            <Icon
              name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
              color="#FFF"
              size={25}
            />
            <TipoText>{data.tipo}</TipoText>
          </IconView>
        </Tipo>
        <ValorView>
          <ValorText>
            R$ {data.valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
          </ValorText>
          <ValorText>{data.date}</ValorText>
        </ValorView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
