import { useEffect, useState, useRef } from 'react';
import { fetchData } from '../../../functions/fetchData';
import '../styles/lastTransactionsEth.css';
import { formatCientyfuNumbre } from '../../../functions/formatCientyfuNumbre';
import ModalCommuns from '../../../components/comuns/Modal';

export default function LastTransactinsEth() {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null); // Almacena el índice de la transacción seleccionada
  const txContainerRef = useRef(null);

  const fetchTransactions = async () => {
    try {
      const response = await fetchData('https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=latest&boolean=true&apikey=XGUJGP8M9DMUZX9MMA595ZP193Y4EY78MI');
      const newTransactions = response?.result?.transactions?.slice(0, 1);

      const filteredTransactions = newTransactions.filter(newTx => !transactions.find(tx => tx.hash === newTx.hash));
      setTransactions(prevTransactions => [...prevTransactions, ...filteredTransactions]);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchTransactions(); 
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // Hacer scroll hacia arriba cuando se agregue una nueva transacción
    if (txContainerRef.current) {
      txContainerRef.current.scrollTop = txContainerRef.current.scrollHeight;
    }
  }, [transactions]);

  const handleTransactionClick = (index) => {
    setSelectedTransaction(index); // Almacenar el índice de la transacción seleccionada
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null); // Resetear el estado del índice de la transacción seleccionada para cerrar el modal
  };

  return (
    <div className='tx_container' ref={txContainerRef} title='Polaris Web3 - Transaction Container'>
      {transactions.map((tx, index) => (
        <div onClick={() => handleTransactionClick(index)} key={index} title={`Polaris Web3 - Transaction: ${tx.hash}`} className='tx'>
          {/* Contenido de la transacción */}
          <div><span>{index}</span></div>
          <div className='tx_cgeneral tx_c1'>
            <div className='tx_c1_block'>Block: <span className='tx_span' title={`Polaris Web3 - Block/${tx.blockNumber}`}>{tx.blockNumber.slice(0,9)}</span></div>
            <div className='tx_c1_hash'>Hash: <span className='tx_span' title={`Polaris Web3 - Hash/${tx.hash}`}>{tx.hash.slice(0,9)}</span></div>
          </div>

          <div className='tx_cgeneral tx_c2'>
            <div className='tx_c2_from'>from: <span className='tx_span'>{tx.from.slice(0,5)}</span></div>
            <div className='tx_c2_to'>to: <span className='tx_span'>{tx.to.slice(0,5)}</span></div>
          </div>

          <div className='tx_cgeneral tx_c3'>
            <div className='tx_c3_xxx'>Value: <span className='tx_span'>{formatCientyfuNumbre(parseInt(tx.value, 16) / 10**18).slice(0,11)}</span></div>
          </div>

          <div><span>ETH</span></div>
        </div>
      ))}
      
      {/* Renderizar el modal solo si hay una transacción seleccionada */}
      {selectedTransaction !== null && (
        <ModalCommuns 
          open={true}
          handleCloseModal={handleCloseModal}
          title={`Tx: ${transactions[selectedTransaction]?.hash?.slice(0,20)} ...`}
          description={`The transaction family tree will be available in Polaris V1.0. For more information we suggest reading our documentation.`}
        />
      )}
    </div>
  );
}
